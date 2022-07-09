var implementBodyMessage = function (obj) {
    return obj;
};
var objTest = {
    name: 'Victor',
    id: 7,
    body: "Hello world"
};
var test = implementBodyMessage(objTest);
console.log(test);
