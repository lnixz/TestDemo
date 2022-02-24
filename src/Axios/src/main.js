const axios = require('axios');
const url = 'https://www.baidu.com/'
axios.get(url)
    .then(res => console.log(res.data))