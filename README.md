# Recipes App

A full-featured backend CRUD application for managing recipes, built using Node.js, Express.js, and MongoDB with Mongoose. The app is structured using the MVC (Model-View-Controller) pattern.

## 🚀 Features

* Create a new recipe
* Retrieve all recipes
* Retrieve a recipe by ID
* Update a recipe by ID
* Delete a recipe by ID

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Architecture:** MVC
* **Documentation:** Postman

## 📁 Folder Structure (MVC Pattern)

```
recipes-app/
│
├── controllers/
│   └── recipeController.js
│
├── models/
│   └── Recipe.js
│
├── routes/
│   └── recipeRoutes.js
│
├── utils/
│   ├── config.js
│   ├── errorRouter.js
│   └── logger.js
│
├── .env
├── app.js           <-- Express app initialized here
├── server.js        <-- Entry point that starts the server
├── package.json
└── README.md
```

## 🔗 API Endpoints

Base URL: `http://localhost:PORT/api/recipes`

| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| POST   | `/`      | Create a new recipe   |
| GET    | `/`      | Get all recipes       |
| GET    | `/:id`   | Get a recipe by ID    |
| PUT    | `/:id`   | Update a recipe by ID |
| DELETE | `/:id`   | Delete a recipe by ID |

## 📄 Sample Request & Response

### POST /api/recipes

**Request Body:**

```json
{
  "title": "Pasta",
  "ingredients": ["noodles", "sauce"],
  "instructions": "Boil noodles and add sauce."
}
```

**Response:**

```json
{
  "_id": "...",
  "title": "Pasta",
  "ingredients": ["noodles", "sauce"],
  "instructions": "Boil noodles and add sauce."
}
```

## ✅ Validation & Error Handling

* Uses Mongoose validation for schema fields
* Returns appropriate status codes and messages for all operations
* Gracefully handles missing or invalid data

## 🌐 Live Demo

You can access the live project here:
🔗 **Hosted URL**: [https://recipes-app-yfz9.onrender.com](https://recipes-app-yfz9.onrender.com)

To use the API routes, append the appropriate path:

* `GET /api/v1/recipes` – Get all recipes
* `GET /api/v1/recipes/:id` – Get a specific recipe
* `POST /api/v1/recipes` – Add a new recipe
* `PUT /api/v1/recipes/:id` – Update a recipe
* `DELETE /api/v1/recipes/:id` – Delete a recipe

## 📬 API Documentation

Postman documentation is publicly available here:
🔗 **Postman Docs**: [https://documenter.getpostman.com/view/43648661/2sB34oDdcQ](https://documenter.getpostman.com/view/43648661/2sB34oDdcQ)

## 📝 How to Run

1. Clone the repo:

   ```bash
   git clone <your-repo-url>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Add your MongoDB URI in a `.env` file:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:

   ```bash
   npm start
   ```

## 👨‍💻 Author

* Subramaniyajothi S

---
