// console.log(module);
const fs = require('fs');

var fetchNotes = () => {
    debugger;
    try {
        var notesString = fs.readFileSync('notes-data.json');
        debugger;
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
    return fetchNotes();
};

var remNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};
var getNote = (title) => {
    var notes = fetchNotes();
    var pickedNote = notes.filter((note) => note.title === title);
    if (pickedNote.length > 0) {
        return pickedNote;
    } else {
        return undefined;
    }
};
var logNote = (note) => {
    console.log('-----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    remNote: remNote,
    getNote: getNote,
    logNote: logNote
};
