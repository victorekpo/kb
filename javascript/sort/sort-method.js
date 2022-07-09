data = [1,5,7,2,3,4,9,11,4,5,6,100,19,20,101]
console.log(data.sort())


data = [1,5,7,2,3,4,9,11,4,5,6,100,19,20,101]
console.log(data.sort((a,b) => a-b))


data = [1,5,7,2,3,4,9,11,4,5,6,100,19,20,101]
console.log(data.sort((a,b) => b-a))


data = [1,5,7,2,3,4,9,11,4,5,6,100,19,20,101]
console.log(data.sort((a,b) => b-(a+3)))


data = [1,5,7,2,3,4,9,11,4,5,6,100,19,20,101]
console.log(data.sort((a,b) => b-(a+5)))
