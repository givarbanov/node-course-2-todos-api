const {ObjectID} = require('mongodb');

const {mogoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '596b0399502612220410efe611';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id is invalid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Todo is not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5969fc9d3e928915c0c62e5b';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User is not faund');
  }
  console.log(user);
}).catch((e) => console.log(e));
