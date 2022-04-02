const zoom = require('fs');

zoom.readFile('data.json', 'utf8', (err, data) => {
    console.log(err, data);
})