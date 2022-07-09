let myPromise = new Promise((resolve, reject) => {
    let finishedWork = true;

    if(finishedWork) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => {
    console.log('Home work finished YEAH!');
}).catch(() => {
    console.log('Homework not finished :(');
});

