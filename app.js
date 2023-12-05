// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Brynn.')


// // Challenge: Append a message to notStrictEqual.txt
// // 1. use appendFileSync to append the file
// // 2. run the script 
// // 3. Check your work 

// fs.appendFileSync('notes.txt', ' I live in Charlotte')

// CREATED A FILE CALLED NOTES.TXT AND ADDED TEXT, APPENDFILESYNC ADDS TEXT TO THE FILE


// const name = require('./utils.js') //app.js cannot retreive variables from utils even if utils is loaded into file


// console.log(name)

// const validator = require('validator')
// const getNotes = require('./notes.js')


// const msg = getNotes()

// console.log(msg)

// console.log(validator.isEmail('example.com'))

// // Challenge: use the chalk library
// //1. instal version 2.4.1
// //2. load chalk into app.js
// //3. print success in green
// //4. test you work

// const chalk = require('chalk') //changes colors
// console.log(chalk.magenta.bold.inverse('Error'))

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// custom yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command ({
    command:'list', // names the command
    describe: 'List your notes', // describes comand
    handler() { // handles the command
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse() // parses the arguments


