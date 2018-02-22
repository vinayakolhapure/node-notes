console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title,body) => {
    var notes =  [];
    var note = {
        title,
        body
    };
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length===0){
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Listing notes');
};

var getNote = (title) => {
    console.log('Getting Note: ', title);
};

var removeNote = (title) => {
    console.log('Removing Note: ', title);
};

module.exports = {
    addNote, //addNote: addNote
    getAll,
    getNote,
    removeNote
};