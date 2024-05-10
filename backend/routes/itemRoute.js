const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require('../models/itemModel')

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const { productType, name, image,sizes,price,defaultSize,colors } = req.body;
  try {
    const userAdded = await User.create({
      productType:productType.toLowerCase(),
      name: name,
      image: image,
      sizes:sizes,
      price: price,
      defaultSize: defaultSize,
      colors: colors
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: error.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const showItems = await User.find();
    res.status(200).json(showItems);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
});

//Get Items by product Type
router.get("/type/:productType", async(req,res)=>{
  const {productType} = req.params;

  try {
    const itemsByType = await User.find({ productType: productType.toLowerCase() });
    res.status(200).json(itemsByType);

    
  } catch (error) {
    console.error("Error fetching items by type:", error);
    res.status(500).json({ error: error.message });
    
  }
})

//Get Individual Item

router.get("/:id",async(req,res)=>{
  const {id} = req.params;
  try {
    const singleItem = await User.findById({_id:id})
    res.status(200).json(singleItem);
    

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
    
  }
})

//Delete
router.delete("/:id",async(req,res)=>{
  const {id} = req.params;
  try {
    const singleItem = await User.findByIdAndDelete({_id:id})
    res.status(200).json(singleItem);

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
    
  }
})

module.exports = router;
