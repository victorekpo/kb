//read file and create map (kv separated by commas)
const fs=require("fs")
mapArr=fs.readFileSync("mapFile").toString().split("\n");mapArr.pop()
newMap=new Map()
for (i in mapArr) {newArr=mapArr[i].split("\t");newMap.set(newArr[0], newArr[1]);console.log(newArr)}
console.log(newMap)
