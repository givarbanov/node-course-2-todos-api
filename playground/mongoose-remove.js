const {ObjectID} = require('mongodb');

const {mogoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('596c9e67a5bde12abb70c910').then((todo) => {
  console.log(todo);
});
