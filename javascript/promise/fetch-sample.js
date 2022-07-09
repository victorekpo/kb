fetch('https://jsonplaceholder.typicode.com/users')
    .then(console.log);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));

//Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch