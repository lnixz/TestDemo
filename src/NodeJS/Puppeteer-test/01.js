const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new', });
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    await page.setViewport({width: 1280, height: 720});
    await page.screenshot({ path: path.resolve(__dirname, 'assets', `${Date.now()}.png`) });
    await browser.close();
})();

