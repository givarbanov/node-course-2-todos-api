// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the local mongo database');
  }
  console.log('Conected to the local mongo database');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5968bb6c12896778918eb3cd')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59687f5d9792ff2ba8b6746b')
  }, {
    $set: {
      name: 'Georgi'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
