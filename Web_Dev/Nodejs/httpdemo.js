/*http is a nodejs module which allows ease in creating websites and handle http requests.promenent http methods like get,put,post and delete can be handled by http,however for complex website development and handling its recommended to use EXPRESS */

const http = require('http')
const Milkshakes = ["Choclet", "Apple", "Blackcurrent", "Coldcoffee"];
const server = http.createServer((req, res) => {
    if (req.url != 'favicon.ico') {
        res.write("<h1>Welcome to Mocho cafe</h1>");
        res.write("<hr/>");
        res.write("<h2>List of Milkshakes available</h2>")
        for (const Milkshake of Milkshakes) {
            res.write(`<li>${Milkshake}</li>`)
        }
        res.end(); //send data to the browser
    }
    console.log(req.url);
});
server.listen(1234);