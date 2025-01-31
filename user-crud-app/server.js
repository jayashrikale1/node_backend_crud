const express = require('express');
const connectDB = require('./src/config/db');
require('dotenv').config();
const app = require('./src/app');

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
