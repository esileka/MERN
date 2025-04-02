// Librarite
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let session = require("express-session");
let contactRoute = require("./routes/contactRoute.js");
let itemRoute = require("./routes/itemRoute.js"); 
const path = require("path");

let app = express();


// Konfigurime
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

// Lidhja me databazën
mongoose.connect('mongodb+srv://esileka:esimongodbleka@cluster0.oclpm.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Something is wrong", err));

app.use(contactRoute);
app.use(itemRoute);  

// Route për përditësimin e një kontakti me ID
app.put("/updateContact/:id", async (req, res) => {
  try {
    const updatedContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedContact);
  } catch (err) {
    console.log("Gabim gjatë përditësimit të kontaktit:", err);
    res.status(500).send("Gabim gjatë përditësimit");
  }
});


app.use("/send", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server start!");
});



