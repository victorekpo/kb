obj = {
	victor: true
}

obj2 = {
	victor: false
}
//var map = new Map();

//The problem with the above is that Map() does not allow the object that it references to be garbage collected. It has a strong reference to the object key in its table, so even if all the other references are lost, the Map will still hold a reference. This is a major memory leak.

//LETS USE WEAKMAPS to enable Garbage Collection, meaning no strong reference to the object
var map = new WeakMap();

const useObj = (obj) => {
//	doSomething(obj);
	var called = map.get(obj) || 0; // gets current value of calls to object, if no calls, sets value at 0
	called++; // increments calls +1 everytime the useObj function runs
	if(called > 10) console.log("SERIOUSLY!");
	if(called > 5) console.log("No more calls!");
	map.set(obj, called);
}

