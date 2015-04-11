var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    due_date: Date,
    timestamp: {
      type: Date,
      default: Date.now
    },
    description: String,
    todo_task: String,
    priority: Number,
    complete: Boolean
});

var Todo = mongoose.model("Todo", todoSchema);

/* GET todo page. */
router.get('/', function(req, res, next) {
  return Todo.find( function (err, tasks) {
    if(!err) {
      res.render('todo', {
        greeting: "Howdy",
        tasks: tasks
      });
      console.log(tasks);
    } else {
      return console.error(err);
    }
  });
});

/* POST form. */
router.post('/', function(req, res) {
  new Todo({
    due_date: req.body.due_date,
    todo_task: req.body.task,
    description: req.body.description,
    priority: req.body.priority
    // complete: false
  }).save(function (err, task) {
    if(err) {
      return console.error(err);
    }
  console.log(task);
  });

  res.redirect('todo');
});

module.exports = router;
