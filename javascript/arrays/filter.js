//.filter(element,index,array)
arr=[{vic:1},{vic:2}]
newArr=arr.filter((data,i,arr) => arr[i]['vic'] !== 1 )
console.log(newArr)

