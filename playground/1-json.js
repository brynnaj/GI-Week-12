const fs = require('fs')


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book) // strigify an object and turn it to json
fs.writeFileSync('1-json.json', bookJSON)


// console.log(bookJSON)

// const parsedData = JSON.parse(book) // takes data in and converts to obkect
// console.log(parsedData.author)

// const  dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString() // converts data to standard string
// const data = JSON.parse(dataJSON) // parsed data to object

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Brynn'
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)