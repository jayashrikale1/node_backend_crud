const express = require("express");
const connectDB = require("./src/config/db");
require("dotenv").config();
const app = require("./src/app");
const setupSwagger = require("./src/swaggerConfig");

// Connect to database
connectDB();

// Setup Swagger
setupSwagger(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
