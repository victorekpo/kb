const lambda5 = (x) => x+5
const lambda7 = (x) => x+7
const addNum = (val,func) => func(val)
console.log(addNum(3,lambda5))
console.log(addNum(22,lambda7))

