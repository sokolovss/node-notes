console.log('node.js has been executed');
// console.log(module);
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };

    var duplicateNotes =notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };


};
var getAll = () => {
    console.log('Getting all notes');
};
var remNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};
var getNote = (title) => {
    console.log('Reading note', title)
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    remNote: remNote,
    getNote: getNote
};
