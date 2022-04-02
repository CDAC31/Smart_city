const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fib = (n) => {
    const fibarray = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibarray.push(fibarray[i - 2] + fibarray[i - 1]);
    }
    return fibarray;
}

function question(statement, result) { //statement is waht kind of input is expected from the user...result is the output that user will get in response for his/her input...
    readline.question(statement, (answer) => { //here answer is the output that you want to give to the user in response to his/her input...
        readline.close;
        return result(answer);
    })
}

question("Enter the limit for fibonacci series\n", (n) => console.log(fib(n)));