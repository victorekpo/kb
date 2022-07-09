var mySet = new Set([1, 2, "abc", {Name: "Ann"}]);

console.log('With Ann size:', mySet.size)

mySet.forEach(x => x.Name === 'Ann' ? mySet.delete(x) : x)

console.log('Bye Ann size:', mySet.size)
