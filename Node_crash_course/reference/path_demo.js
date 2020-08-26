const path = require('path')

// Base file

console.log(path.basename(__filename));

// Dir Name

console.log(path.dirname(__filename));

//EXtension
console.log(path.extname(__filename))

//create path object

console.log(path.parse(__filename));

//concatenate path

console.log(path.join(__dirname, 'test','hello.html'));