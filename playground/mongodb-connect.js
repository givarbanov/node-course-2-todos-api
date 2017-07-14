// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApi', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the local mongo database');
  }
  console.log('Conected to the local mongo database');

  // db.collection('Todos').insertOne({
  //   text: 'Someting to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Georgi',
  //   age: 50,
  //   location: 'Sofia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
