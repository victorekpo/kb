let a = new Set();
a.add('Hello');

for(let key of a) console.log(key)

a.forEach(key => console.log(key))

mySet.forEach(async(item) =>{
   await doSomething(item)
 })
