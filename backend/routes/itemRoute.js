// Librarite
const express = require("express");
const itemModel = require("../models/dishes.js");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

const router = express.Router();  // Perdorim router-in per rruget

// Konfigurimi per multer per ngarkimin e imazheve
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image"); // Folderi ku ruhen imazhet
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname)); // Emri unik për çdo file
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false); // Refuzo file të tjera
  }
};

let upload = multer({ storage, fileFilter });

router.use(express.json());

// Rruga për shërbimin e imazheve (përdorimi i express.static)
router.use("/image", express.static(path.join(__dirname, "image")));

// POST => Krijimi i një pjate
router.post("/adddishes", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("Imazhi është i detyrueshëm.");
    }

    if (!req.body.title || !req.body.desc || !req.body.price) {
      return res.status(400).send("Të dhënat janë të paplotë.");
    }

    const newItem = new itemModel({
      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price,
      image: req.file.filename,
    });

    await newItem.save();

    res.status(200).send(newItem);
  } catch (err) {
    console.log("Gabim gjatë shtimit të pjatës:", err);
    res.status(500).send("Ka ndodhur një gabim.");
  }
});

// PATCH => Përditësimi i një pjatë
router.patch("/update/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    
    // Verifikimi që ID-ja është valide
    if (!id || id.length !== 24) {
      return res.status(400).send("ID e pavlefshme");
    }
    
    const { title, desc, price } = req.body;
    let updateData = { title, desc, price };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedItem = await itemModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedItem) {
      return res.status(404).send("Item not found");
    }

    res.status(200).send(updatedItem);
  } catch (err) {
    console.log("Gabim gjatë përditësimit të pjatës:", err);
    res.status(500).send("Gabim gjatë përditësimit të pjatës");
  }
});

router.put("/updateContact/:id", async (req, res) => {
  try {
    const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedContact);
  } catch (err) {
    console.log("Gabim gjatë përditësimit të kontaktit:", err);
    res.status(500).send("Gabim gjatë përditësimit");
  }
});

// DELETE => Fshirja e nje pjate
router.delete("/deletedishes/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await itemModel.findById(itemId);

    if (!item) {
      return res.status(404).send("Item not found");
    }

    const imagePath = path.join(__dirname, "image", item.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await itemModel.deleteOne({ _id: itemId });
    res.status(200).send("Item deleted");
  } catch (err) {
    console.log("Gabim gjatë fshirjes së pjatës:", err);
    res.status(500).send("Gabim gjatë fshirjes së pjatës");
  }
});

// GET => Leximi i të gjitha pjatave
router.get("/alldishes", async (req, res) => {
  try {
    const items = await itemModel.find({});
    const itemsWithImagePath = items.map(item => {
      item.image = `/image/${item.image}`;
      return item;
    });
    res.status(200).send(itemsWithImagePath);
  } catch (err) {
    console.log("Gabim gjatë leximit të pjatave:", err);
    res.status(500).send("Gabim gjatë leximit të pjatave");
  }
});

// GET => Leximi i një pjate me ID
router.get("/onedishes/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await itemModel.findById(itemId);

    if (!item) {
      return res.status(404).send("Item not found");
    }

    item.image = `/image/${item.image}`;
    res.status(200).send(item);
  } catch (err) {
    console.log("Gabim gjatë leximit të pjatës:", err);
    res.status(500).send("Gabim gjatë leximit të pjatës");
  }
});

module.exports = router;  // Eksportoni router-in dhe jo app
