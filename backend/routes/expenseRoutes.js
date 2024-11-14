const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController'); // Import deleteExpense function

// Route to add a new expense
router.post('/', addExpense);

// Route to fetch all expenses
router.get('/', getExpenses);

// Route to delete an expense by ID
router.delete('/:id', deleteExpense);

module.exports = router;
