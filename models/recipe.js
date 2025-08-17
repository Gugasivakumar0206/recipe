// import mongoose module
const mongoose = require('mongoose');

//create a schema for the Todo model

const todoSchema = new mongoose.Schema({
   name: {
    type: String,
    trim: true,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('Recipe', todoSchema,'Recipes');