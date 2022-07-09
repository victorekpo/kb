function getData(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if(this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            } // else block
        }; // xhr onload
        
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: this.statusText
            });
        } // xhr onerror

        xhr.send();
    
    }) // emd promise block
}

getData('GET', 'https://jsonplaceholder.typicode.com/users')
.then((data) => {
    console.log(data);
    console.log(JSON.parse(data));
})
