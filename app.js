console.log('Starting app...');
const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = process.argv[2];
console.log(argv);

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log('Wrong title');
    } else {
        console.log(`Successfuly added:  ${note.title}`);
    };
} else if (command === "list") {
    notes.getAll();
} else if (command === "remove") {
    var noteRemoved = notes.remNote(argv.title, argv.body);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else if (command === "read") {
    notes.getNote(argv.title, argv.body);
} else {
    console.log('Unrecognized command')
};