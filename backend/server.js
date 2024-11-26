const express = require('express');
const multer = require('multer'); // Use multer for handling file uploads
const pdfParse = require('pdf-parse'); // Import pdf-parse for extracting data
require('dotenv').config(); // Load environment variables
const cors = require('cors'); // Import the CORS package

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/openai');

// Multer setup: Memory storage (no file saved to disk)
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage }); // Use multer with memory storage

// Middleware
app.use(cors()); // CORS should be the first middleware to handle preflight requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/', routes); // Add your routes

// Global error handler (better to handle specific types of errors)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).send({ error: 'Something went wrong!' }); // Send generic error message
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
