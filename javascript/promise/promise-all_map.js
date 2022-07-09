https://betterprogramming.pub/how-to-use-async-await-with-map-in-js-5059043564e0

returns array of promises, resolve using for of or Promise.all
https://stackoverflow.com/questions/40140149/use-async-await-with-array-map

```
await Promise.all(
    arr.map(async (element) => {
        ....
    })
)
```

Serial vs Parallel Processing
-for of with await is serial, also reduce
-map is parallel
https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971

