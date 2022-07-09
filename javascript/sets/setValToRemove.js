var mySet = new Set(["foo", "bar", "baz"]);
var valuesToRemove = new Set(["foo", "baz"]);

function removeAll(originalSet, toBeRemovedSet) {
    toBeRemovedSet.forEach(Set.prototype.delete, originalSet);
}

console.log([...mySet]);
removeAll(mySet, valuesToRemove);
console.log([...mySet]);
