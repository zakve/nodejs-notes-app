const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log('Listing out all your notes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading the note')
    }
})

console.log(yargs.argv)