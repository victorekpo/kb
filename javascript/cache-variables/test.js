let { myvar,getvar, getall } = require('./var.js');
console.log(myvar);
getvar();
setTimeout(() => {console.log(getall());},00)

