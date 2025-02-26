//librarite
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')

//Konfigurime
app.use(cors(
    {
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
    }))
    app.use(session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
    }))
    app.use(express.json({ limit: "1000mb", extended: true }));
    app.use("./images",express.staticc(path.join(_dirname, "/images")));


 // Lidhja me databazën
mongoose.connect('mongodb+srv://esileka:esimongodbleka@cluster0.oclpm.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0')
    .then(() =>console.log("DB connected"))
    .catch((err) => console.log("Something is wrong", err))


    // Testimi
app.use('/', (req, res) => {
    res.send("Hello Node!")
    })

    // Server
app.listen(5000, () => {
    console.log("Server created!")})
