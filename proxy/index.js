const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const KhaltiP = require("khalti-js");
const khalti = new KhaltiP({});

app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {});

app.listen(3000, () => console.log("Server running on port 3000"));
