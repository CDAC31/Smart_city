const rl = require("readline").createInterface({ //creating object rl which does I/O...readline is a nodejs module which allows users to take input from console and display it...
    input: process.stdin,
    /*this interface will contain input output */
    output: process.stdout
});

function question(statement, result) {
    rl.question(statement, (answer) => { //result & answer is a callback function which will give expected result,,,,,
        rl.close;
        return result(answer);
    })
}

question("what is your hobby ?\n", (res) => console.log(res));