const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const itemRoute = require("./routes/itemRoute");

app.use(express.json());

mongoose.connect("mongodb+srv://snchtpdl12:TQGwmEuItBVYxoW7@cluster0.wvby1km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Running successfully at, ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  });

app.use("/items", itemRoute); // Mounting userRoute under the base path '/users'
