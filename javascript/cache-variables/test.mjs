import { myvar, getvar } from './var.mjs';
console.log(myvar);
getvar();
setTimeout(() => {console.log(myvar);},3000)
