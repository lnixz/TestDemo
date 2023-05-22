const puppeteer = require('puppeteer');
const config = require('./private');
const cookies = require('./private/cookies');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // 显示浏览器窗口
        args: [
            '--start-maximized', // 浏览器最大化
            '--disable-gpu', // 禁用GPU加速
            '--disable-dev-shm-usage', // 禁用共享内存
            '--disable-setuid-sandbox', // 禁用沙盒模式
            '--no-first-run', // 不需要首次运行
            '--no-sandbox', // 无沙盒模式
            '--no-zygote', // 禁用子进程
            '--disable-infobars', // 禁用自动化提示栏
            '--disable-browser-side-navigation', // 禁用自动化导航
            '--disable-features=site-per-process', // 禁用单独进程
        ], // 添加参数模拟真实用户使用浏览器
    });
    const page = await browser.newPage();

    cookies.forEach(cookie => {
        page.setCookie(cookie);
    });

    await page.goto('https://juejin.cn/user/center/signin?avatar_menu');
    await page.setViewport({width: 1280, height: 720})

    await page.waitForSelector('#juejin > div.view-container > main > div.right-wrap > div > div:nth-child(1) > div.signin > div.content-body > div.content-right > div.code-calender > button')
    await page.click('#juejin > div.view-container > main > div.right-wrap > div > div:nth-child(1) > div.signin > div.content-body > div.content-right > div.code-calender > button')

    await page.close()
    await browser.close()
})();