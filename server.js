require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recipeRoutes = require('./routes/recipes.routes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('❌ MONGO_URI missing in .env');
  process.exit(1);
}
mongoose
  .connect(uri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// health
app.get('/', (_req, res) => res.json({ ok: true, service: 'recipes-api' }));

// routes
app.use('/recipes', recipeRoutes);

// error handler
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
