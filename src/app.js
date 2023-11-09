const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./db/mongoose');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware for parsing request body
app.use(express.json());

// Book routes
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;