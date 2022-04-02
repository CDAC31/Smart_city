const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

EventEmitter.on('waterisfull', () => {
    console.log('switch off the motor!');
    setTimeout(() => {
        console.log('Fucking switch off the motor!!!');
    }, 3000);
})

myEmitter.emit('waterisfull');