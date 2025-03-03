const express = require("express");
const itemModel = require("../models/item.js");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const app = express();

// Konfigurime per multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
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
      cb(null, false);
    }
  };
  let upload = multer({ storage, fileFilter });

// Create => shtimi i elementeve ne Databaze
app.post("/addItem", upload.single("photo"), async (req, res) => {
    try {
      const newItem = new itemModel({
        ...req.body,
        photo: req.file.filename,
      });
      console.log(newItem);
      await newItem.save();
      res.status(200).send(newItem);
    } catch (err) {
      console.log("Not added Item", err);
      res.status(500).send("Not added Item");
    }
  });
// Read => leximi/afishimi i informacioneve nga DB
// te gjitha info, info per nje element
app.get("/allItems", async (req, res) => {
    try {
      const items = await itemModel.find({});
      console.log(items);
      res.status(200).send(items);
    } catch (err) {
      console.log("Not read Items", err);
      res.status(500).send("Not read Items");
    }
  });
// Lexim vetem nje
app.get("/oneItem/:id", async (req, res) => {
    try {
      const itemId = req.params.id;
      const item = await itemModel.findById({ _id: itemId });
      console.log(item);
      res.status(200).send(item);
    } catch (err) {
      console.log("Not read Items", err);
      res.status(500).send("Not read Items");
    }
  });


//Update => ndryshimi i info 
app.patch("/update/:id" ,upload.single("photo"), async(req,res)=>{
    try{
        const itemId = req.params.id;
        const itemInfo = {...req.body};
        if (req.file){
            itemInfo.photo = req.file.filename;
        }
        const itemUpdate= await itemModel.findByIdAndUpdate(
            {_id: itemId},
            {$set: itemInfo},
            {new: true}
    );
    console.log("Item updated")
    res.status(200).send(itemUpdate);

    }catch(err){
        console.log("Not updated"+err);
        res.status(500).send("Not updated"+err);
    }
});
// Delete => fshirja
app.delete("/deleteItem/:id", async (req, res) => {
    try {
      const itemId = req.params.id;
      await itemModel.deleteOne({ _id: itemId });
      console.log("Item deleted");
      res.status(200).send("Item deleted");
    } catch (err) {
      console.log("Not deleted Items", err);
      res.status(500).send("Not deleted Items");
    }
  });




  module.exports = app;