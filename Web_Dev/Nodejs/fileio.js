/*Nodejs fs module can be used to directly interact with files*/
const fs = require("fs");
const data = fs.readFileSync("./flipcart.js", "utf-8"); /*To read file synchronously.Synchronous means waiting for the statement or ongoing process to finish then start next process*/
console.log(data);

/*Asynchronous means multiple processes will start processing without waiting for any other processes to complete.....almost like simultaneously running cuncurrently*/

const filename = "./flipcart.js"
fs.readFile(filename, "utf-8", (err, data) => { /*To read files asyncronously*/
    if (err != null) {
        console.log(err.message);
    } else {
        console.log(data);
    }
})

console.log("astala vista");

/* fs.open api which is an all in one for all kind of operations, fs.open(path, flags, mode, callback)*/
let filename = "sample.txt";

fs.open(filename, 'a+', (err, fd) => { //fd means file discripter
    let content = " some data to append into the file ";
    fs.write(fd, content, (e, written, buffer) => {
        if (e != null) {
            console.log(e.message)
        } else {
            fs.close(fd, () => { //to close the fd and confirn completion of the function
                console.log("file appended sucessfully");
            })
        }
    })
})