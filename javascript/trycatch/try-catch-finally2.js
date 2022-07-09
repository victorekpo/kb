const testTry = (value) => {
 var testVar
 try {
  if (typeof value !== 'number') {
    throw 'Exception';
  }
  testVar="This ran successfully."
 }
 catch(log) {
  console.log('error message:', log)
 }
 finally {
  console.log('program done')
  if (!testVar) { testVar="This did not run all the way" }
 }
 console.log(testVar)
 console.log("")
}

console.log("Test 1: 1")
testTry(1)
console.log("Test 2: '1'")
testTry('1')
console.log("Test 3: []")
testTry([])
console.log("Test 4: {}")
testTry({})
console.log("Test 5: null")
testTry(null)
console.log("Test 6: undefined")
testTry(undefined)
console.log("Test 7: 1+1")
testTry(1+1)
