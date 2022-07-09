obj={a:null, b:null, c:null}

const isChildrenNull = obj => {
  return Object.values(obj).every(a => a === null)
}

const allNullObj = obj => {
  result = isChildrenNull(obj);
  if(result) { obj = null; return obj }
  return false
}
console.log(isChildrenNull(obj));
