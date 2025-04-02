const express = require("express")
const contactModel = require("../models/contact.js")

const app = express()


// metoda post
app.post('/addContact', async(req,res)=>{
    try{
        console.log(req.body)
        // ka marr info nga frontend
        const newContact = new contactModel(req.body)
        // ruajtja e informacionit
        await newContact.save()
        res.status(200).send(newContact)
    }catch(err){
        console.log("Contact not saved ", err)
        res.status(500).send("Contact not saved ", err)
    }
});

app.put("/updateContact/:id", async (req, res) => {
  try {
    console.log(req);
    const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedContact);
  } catch (err) {
    console.log("Gabim gjatë përditësimit të kontaktit:", err);
    res.status(500).send("Gabim gjatë përditësimit");
  }
});

// GET => Leximi i të gjitha pjatave
app.get("/allContacts", async (req, res) => {
    try {
      const contacts = await contactModel.find({});
      res.status(200).send(contacts);
    } catch (err) {
      console.log("Gabim gjatë leximit të rezervimeve:", err);
      res.status(500).send("Gabim gjatë leximit të rezervimeve");
    }
  });

module.exports = app