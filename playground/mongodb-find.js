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

  // db.collection('Todos').find({
  //   _id: new ObjectID('59687dd19db22d27144ffb86')
  // }).toArray().then((docs) => {
  //   console.log('TODOS');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('TODOS');
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // });

  db.collection('Users').find({name: 'Georgi'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data', err);
  });

  // db.close();
});
