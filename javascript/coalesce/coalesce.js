const coalesce = (...args) => args.filter((_,index) => { console.log(index,_);return ![null, undefined].includes(_)}); //use 'find' instead of 'filter' for the first occurence. 
arr = [100,null,5,10,null,11]
console.log(coalesce(...arr));
