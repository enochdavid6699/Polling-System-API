const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

//Home Controller
router.get('/' , homeController.home);

// Setting up routes for questions and options using their respective router files
router.use('/questions', require('./questions'));
router.use('/options', require('./options'));

module.exports=router;