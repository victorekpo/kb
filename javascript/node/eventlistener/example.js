const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const tester = (num) => {
  console.log("this is a test");
  console.log("another test");
  console.log("another test");
  console.log("another test");
  console.log("another test");
  console.log("another test");
  console.log("another test");
  console.log("another test");
  if(num == 1) { console.log("async test")}
}

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
    tester(1);
    console.log("Another async");
  });
  setTimeout(tester,1000);
});
myEmitter.emit('event', 'a', 'b');
