const XMLHttpRequest = require('xhr2')

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log('响应成功!');
            console.log(xhr.responseText);
        } else {
            console.log("Requestwasunsuccessful:" + xhr.status);
        }
    }
}

xhr.open('GET','https://www.baidu.com/', true);
xhr.send(null);



