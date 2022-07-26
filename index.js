//setting up express 
const express = require('express');
//required to set the static files access
const path = require('path');
const port = 8000;

//enabling our app to use our database
const db = require('./config/mongoose');
const Task = require('./models/task');
const Today = require('./models/todaylist')

const app = express();

//setting up our view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//parsing our requests
app.use(express.urlencoded());

//accessing the static files
app.use(express.static('assets'));


//route to handle (controller-action) to display our app view
app.get('/', function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) { console.log('error fetching contacts'); return }
        res.render('home', {
            title: 'RightAway ToDo',
            tasks: tasks
        });
    });
});


//route to handle the action for viewing the tasks for day page
app.get('/today', function (req, res) {
    Today.find({}, function (err, tasks) {
        if (err) { console.log('error fetching contacts'); return }
        res.render('today', {
            title: 'RightAway ToDo',
            tasks: tasks
        });
    });
});

//route to create tasks in the today list
app.post('/create-today', function (req, res) {
    // console.log(req.body);
    Today.create({
        description: req.body.description,
        category: req.body.category,
    }, function (err, newTask) {
        if (err) { console.log('error creating contact'); return }
        console.log('*****', newTask);
        res.redirect('today');
    })

});
//added git

//routes to delete tasks from the to today todo list
app.get('/delete-today', function (req, res) {
    //get the id from query in the url
    let id = req.query.id;

    //find the contact in the database using id and delete it
    Today.findByIdAndDelete(id, function (err) {
        if (err) { console.log('error deleting from database'); return }
        return res.redirect('back');
    });
});


//route to handle the create task action for planner/checklist 
app.post('/create-task', function (req, res) {
    // console.log(req.body);
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTask) {
        if (err) { console.log('error creating contact'); return }
        console.log('*****', newTask);
        res.redirect('back');
    })

});



//route to handle the delete task action for planner/checklist
app.get('/delete-task', function (req, res) {
    //get the id from query in the url
    let id = req.query.id;

    //find the contact in the database using id and delete it
    Task.findByIdAndDelete(id, function (err) {
        if (err) { console.log('error deleting from database'); return }
        return res.redirect('back');
    });
});

//listening on this port whenever there's a request
app.listen(port, function (err) {
    if (err) {
        console.log('error running express');
        return;
    }
    console.log('express running on port', port);
});