console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

// var res = notes.addNote();
// console.log(res);
var resAdd = notes.add(10,2);
console.log(resAdd);
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//     if(err) {
//         console.log('Unable to write to file');
//     }
// });