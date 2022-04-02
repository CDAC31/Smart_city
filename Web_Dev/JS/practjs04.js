function greet(name, greeting = "hi") {
    console.log(greeting + " " + name)
}

let name = "Dj"
let greeting = "hello"
greet(name);

function sum(a, b, c) {
    let s = a + b + c;
    return s;
}

let rem = sum(10, 20, 30);
console.log(rem);