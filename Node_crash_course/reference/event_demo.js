const EventEmitter= require('events');

//create a class 
class MyEmitter extends EventEmitter {

}

//init object
const myEmitter = new MyEmitter();

myEmitter.on('event',() => console.log('Event fired'));

//init event
myEmitter.emit('event');event