const fs = require('fs')
const chalk = require('chalk')
const { CLIENT_RENEG_LIMIT } = require('tls')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => {
        return note.title === title
    })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('Note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note is removed'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    saveNotes(notesToKeep)
}

const listNotes = (title) => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))
    notes.map((note) => {
        console.log(note.title)
    })
}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}