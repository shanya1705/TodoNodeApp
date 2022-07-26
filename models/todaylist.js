//requiring mongoose
const mongoose = require('mongoose');


//schema for one task
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    // date: {
    //     type: String,
    //     required: true
    // }
});


//creating  the model of the  task schema
const Today = mongoose.model('Today', taskSchema);


//exporting the model for use
module.exports = Today;