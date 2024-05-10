const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
 
const cors = require("cors");
app.use(cors());

const itemRoute = require("./routes/itemRoute");

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Running successfully at, ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  });

app.use("/items", itemRoute);
