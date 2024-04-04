const mongoose = require("mongoose");

// Creating Schema
const userSchema = new mongoose.Schema({
  productType: {
    type:String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: [String],
    required: true,
    unique: true
  },
  sizes:{
    type:[Number],
    required: true
  },
  price: {
    type: Number,
    required: true 
  },
  defaultSize:{
    type: Number,
    required: true
  },
  colors:[
    {
      color: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],


  
},{timestamps: true});

// Creating Model
const User = mongoose.model('User', userSchema);
module.exports = User;
