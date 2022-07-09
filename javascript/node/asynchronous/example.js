fs = require('fs');

const getData = (err,data) => {
	console.log('data:', data);
}

fs.readdir('c:/', getData); // callback function does not block I/O

console.log("This is Asynchronous")
