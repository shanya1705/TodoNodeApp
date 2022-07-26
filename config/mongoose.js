//requiring mongoose 
const mongoose = require('mongoose');


//connecting the mongodb
mongoose.connect('mongodb://localhost/task_list_db');
const db = mongoose.connection;

//if connection to database fails displaying error
db.on('error', console.error.bind(console, 'error connecting to db'));


//displaying a message for successful connection to database
db.once('open', function () {
    console.log('successfully connected to db');
});
