console.log('utils.js')

const name = 'Alexandria'

const add = function (a, b) {
    return a + b
}

module.exports = name //makes the variable accesable in app.js


// CHALLENGE: define and use function in new file
// - create a new file called notes.js
// - create get notes function that returns 'your notes...'
// - export getnotes function
// - from app.js, load in and call the func 