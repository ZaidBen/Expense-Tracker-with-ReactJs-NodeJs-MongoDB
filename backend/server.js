const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const expenseRoutes = require('./routes/expenseRoutes');

// Use Routes
app.use('/api/expenses', expenseRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/expenseTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
