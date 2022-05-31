const axios = require('axios');
const cheerio = require('cheerio')
const url = 'https://www.xinliang.info/'
const url2 = `http://www-tk-cn-test-wh-tkc.tk.cn/sp-greedy/sit?api_s=document.property&api_m=policy.download&applicantName=F109C20A15B0D70C47C50DE46DF3C35B6CE92CE78C91A99DF81&policyNo=E65BE122CF90DE32BE42A47A115C26D61BE47BF106AE43BE62BF2D38DE18D64AE126D92B19DE6D52DE63CE114DF75C21CE46AE33C69A33C64CF83`;
// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//         const $ = cheerio.load(res.data)
//     })
axios.get(url2)
    .then(res => {
        // console.log(res.data)
        const URL = window.URL.createObjectURL(res.data)
        console.log(URL);
    })

// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     await page.screenshot({ path: 'example.png' });

//     await browser.close();
// })();