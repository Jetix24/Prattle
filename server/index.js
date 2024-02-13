const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

const server = app.listen(process.env.PORT,()=> {
    console.log(`El servidor se inició en el puerto ${process.env.PORT}`);
})
