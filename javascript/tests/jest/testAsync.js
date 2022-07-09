const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0)
                reject(new Error('Number must be greater than zero'));
                resolve(a+b);
        }, 2000)
    })
}

module.exports = add;