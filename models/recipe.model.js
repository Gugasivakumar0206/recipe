const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    ingredients: {
      type: [String],
      required: true,
      validate: v => Array.isArray(v) && v.length > 0
    },
    instructions: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = model('Recipe', RecipeSchema);
