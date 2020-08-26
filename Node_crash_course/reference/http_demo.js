const http = require('http')

//create http.Server Object

http.createServer((req, res) =>{
    //write a response

    res.write('hello world');
    res.end

}

).listen(5000, () => console.log('Server started'))