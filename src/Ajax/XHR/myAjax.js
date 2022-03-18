const ajax = {
    baseUrl: '',
    get(url, fn, data = null) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fn(xhr.responseText)
            }
        }
        xhr.send(data);
    },
    post(url, fn, data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.baseUrl + url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-wwwform-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fn(xhr.responseText)
            }
        }
        xhr.send(data);
    }
}
ajax.baseUrl = 'http://localhost:3000'
ajax.get('/get', (res) => {
    console.log('get请求:');
    console.log(res);
}
)