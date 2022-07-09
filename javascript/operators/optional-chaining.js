// Optional Chaining ( ?. )
// 
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// Use optional chaining when there is a possibility that the properties may not exist. For example:

a={ a:{value: 1}, b:{value: 2}, c:{value:3} }

result=a.d?.value // This will short-circuit to undefined.
//result2=a.d.value // This will result in an error.
result2=a && a.d && a.d.value // very verbose

exists=a.c?.value // Result: 3
exists2=a.c.value // Result: 3
exists3=a && a.c && a.c.value // Result: 3

console.log(result, result2)
console.log(exists, exists2, exists3)

// Benefits of Optional Chaining
// Avoid Unnecessary Chaining with && 
// let nestedProp = obj.first && obj.first.second; // to validate object

// Optional Chaining is also useful for calling 3rd party APIs when the method may not exist
// apiCall = thirdPartyAPI.call?.(); // 
// Note: If there is a property with such a name and which is not a function, using ?. will still raise a TypeError exception (someInterface.customMethod is not a function).
// This could be avoided by using typeof <method> === 'function' to check if it is indeed a function.
