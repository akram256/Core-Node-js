const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    // console.log(req.url)
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public', 'index.html'), (err, content) =>{
    //         if (err) throw err;
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(content); 

    //     })
     
    // }
    // if (req.url === '/api/users'){
       
    //         const users = [{name:"akram",age:20},
    //                       {name:"Mukasa",age:25}];
    //         res.writeHead(200,{'Content-Type':'application/json'});
    //         res.end(JSON.stringify(users));
     
    // }

//build file path

let filepath = path.join(__dirname, 'public',req.url === '/' ? 'index.html':req.url );
    let extname= path.extname(filepath);

    //set initial content type
    let ContentType ="text/html"

    //set ext and set content type
    switch(extname){
        case '.js':
            ContentType='text/javascript';
            break;
        case '.css':
            ContentType='text/css';
            break;
        case '.json':
            ContentType='application/json';
            break;
        case '.png':
            ContentType='image/png';
            break;
        case '.jpg':
            ContentType='image/jpg';
            break;

    }
    //read file
    fs.readFile(filepath, (err, content)=> {
        if (err){
           if(err.code == 'ENOENT'){
               //PAGE NOT FOUND
               fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content)=> {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(content, 'utf-8')
               });
           }
           else {
               //some server error
               res.writeHead(500);
               res.end(`server error ${err.code}`);

           }
        }
        else {
            //success
            res.writeHead(200,{'Content-Type':ContentType});
            res.end(content, 'utf-8')

        }

    }) 

} );

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));