const resolved = result => console.log(result, "Resolved");
const rejected = result => console.error(result, "Rejected");

var newPromise = Promise.reject(new Error('fail')).then(resolved, rejected);
