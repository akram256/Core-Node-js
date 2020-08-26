const fs =require('fs');
const path = require('path');

//create a folder on system
// fs.mkdir(path.join(__dirname, '/test'), {},  err => {
//     if (err) throw err;
//     console.log('folder created')
// });

//create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'hello World' ,{},  err => {
//     if (err) throw err;
//     console.log('file writen to');

//     // appending to a file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),' Akram is a boss' ,{},  err => {
//         if (err) throw err;
//         console.log('file writen to')
//     })
// })

// Read file

fs.readFile(path.join(__dirname, '/test', 'helloWorld.txt'),'utf8',  (err, data)=> {
    if (err) throw err;
    console.log(data);
});

//Rename file

// fs.rename(path.join(__dirname, '/test', 'hello.txt'), (path.join(__dirname, '/test', 'helloWorld.txt')),  err => {
//     if (err) throw err;
//     console.log("File renamed");
// });

