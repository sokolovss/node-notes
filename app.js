const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs');

const notes = require('./notes.js');
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}; 

const argv = yargs
    .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
    })
    .command('list', 'List all the notes')
    .command('read', 'Read specific note', {
        title: titleOptions
    })
    .command('remove', 'Delete specific note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = process.argv[2];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log('Wrong title');
    } else {
        console.log(`Successfuly added:  ${note.title}`);
    };
} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((element) => notes.logNote(element));
} else if (command === "remove") {
    var noteRemoved = notes.remNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else if (command === "read") {
    var note = notes.getNote(argv.title);
    console.log(`---------------------------------------------- ${note}`);
    if (note === undefined) {
        console.log('Title not found');
    } else {
        console.log('Succesfully read: ');
        console.log(`Title: ${note[0].title}`);
        console.log(`Body: ${note[0].body}`);
    };

} else {
    console.log('Unrecognized command')
};