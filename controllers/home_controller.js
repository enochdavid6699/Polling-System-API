//Require Questions and Options
const Question = require('../models/question');
const Option = require('../models/option');

//Loading all th questions and Options Present
module.exports.home = async function (req, res) {

    try {

        //Find all Questions and Populate the Options
        let questions = await Question.find({}).populate('options').exec();


        // Send the questions back in the response
        return res.status(200).json(questions)

    } catch (error) {
        // Log any errors that occur and return an error response
        console.log(error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}