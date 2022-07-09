const testTry = () => {
 var testVar
 try {
  console.log(7)
  throw 'Exception';
  testVar=2
 }
 catch(log) {
  console.log('error message:', log)
 }
 finally {
  console.log('program done')
  testVar=3
 }
 console.log(testVar)
}
testTry()
