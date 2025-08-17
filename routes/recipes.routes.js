// routes/recipes.routes.js
const router = require('express').Router();
const c = require('../controllers/recipes.controller'); // <-- exact path & case

router.post('/', c.createRecipe);
router.get('/', c.getAllRecipes);
router.get('/:id', c.getRecipeById);
router.put('/:id', c.updateRecipe);
router.delete('/:id', c.deleteRecipe);

module.exports = router;
