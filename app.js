// import the express module
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute')
const recipesRouter = require('./routes/recipesRouters');
const cors = require('cors');

// const Todo = require('./models/todo');

// create an instance or application of express
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true
    }
));

// middleware to parse JSON bodies
app.use(express.json());

// import the logger middleware
app.use(logger)

app.use('/api/v1/recipes', recipesRouter);


// import the error handling middleware
app.use(errorRoute);

// export the app instance
module.exports = app