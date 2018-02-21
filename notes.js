console.log('Starting notes.js');

var addNote = (title,body) => {
    console.log('Adding Note ', title, body);
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