const express = require('express');
const router = express.Router();

const optionsController = require('../controllers/options_controller'); // Import option controller

// Define routes for option-related operations
router.post('/:id/create', optionsController.create); // Create a new option for a given question
router.delete('/:id/delete', optionsController.delete); // Delete an option with the given ID
router.get('/:id/add_vote', optionsController.addVote); // Add a vote to an option with the given ID

module.exports=router;