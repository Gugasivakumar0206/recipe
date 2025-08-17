// controllers/recipes.controller.js
const Joi = require('joi');
const Recipe = require('../models/recipe.model');

const recipeSchema = Joi.object({
  name: Joi.string().min(3).required(),
  ingredients: Joi.array().items(Joi.string().min(1)).min(1).required(),
  instructions: Joi.string().min(5).required()
});

exports.createRecipe = async (req, res, next) => {
  try {
    const { error, value } = recipeSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const recipe = await Recipe.create(value);
    res.status(201).json(recipe);
  } catch (e) { next(e); }
};

exports.getAllRecipes = async (_req, res, next) => {
  try {
    const list = await Recipe.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (e) { next(e); }
};

exports.getRecipeById = async (req, res, next) => {
  try {
    const item = await Recipe.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Recipe not found' });
    res.json(item);
  } catch (e) { next(e); }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    const { error, value } = recipeSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const updated = await Recipe.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!updated) return res.status(404).json({ error: 'Recipe not found' });
    res.json(updated);
  } catch (e) { next(e); }
};

exports.deleteRecipe = async (req, res, next) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Recipe not found' });
    res.json({ message: 'Recipe deleted' });
  } catch (e) { next(e); }
};
