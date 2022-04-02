const http = require('http');
const fs = require('fs') //To read write html files...
const httpParse = require('url').parse

const root = __dirname; //to get path of the current dir...

function display(res, url) {
    const file = root + url + ".html"; //current dir + url + .html --> homepage.html
    fs.createReadStream(file).pipe(res); //the contents of the file are pushed to res via pipe which leads to the contents of the file to be read by res... 
}

function errorpage(res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h2> Nodejs Error </h2>");
    res.write('<hr/>');
    res.write("<p>Oops! something went wrong</p>");
    res.end();
}

http.createServer((req, res) => {
    //to handle get method from Registration html...
    if (req.method == "GET") {
        const query = httpParse(req.url).query;
        if (query != null) {
            let obj = httpParse(req.url, true).query; //true for converting it into json data...
            const content = `${obj.txtName} has been successfully registered`
            res.write(content);
            res.end();
            return;
        }
    } else if (req.method == "POST") {
        req.on('data', (input) => {
            res.write(input);
            res.end();
        })
    }

    switch (req.url) {
        case '/favicon.ico':
            res.end();
            break;
        case "/HomePage":
            display(res, req.url);
            break;
        case "/Registration":
            display(res, req.url);
            break;
        default:
            errorpage(res);
            break;
    }
}).listen(1234);