const express = require('express');
const router = express.Router();

const questionsController = require('../controllers/questions_controller');

// Route for creating a new question
router.post('/create', questionsController.create);
router.get('/:id', questionsController.getQuestion)
// Route for deleting a question with the given ID
router.delete('/:id/delete',  questionsController.delete);

// Mount the options router as a sub-router for the question router
router.use('/options', require('./options'));

module.exports=router;