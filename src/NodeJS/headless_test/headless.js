const process = require('child_process');
const path = require('path');
const fs = require('fs');

// C:\Program Files\Google\Chrome\Application
const chromeUrl = path.join('C:', 'Program Files', 'Google', 'Chrome', 'Application', 'chrome'); // 浏览器路径
const headLess = '--headless'; // 使用无头浏览器
const disableGpu = '--disable-gpu'; // 不使用硬件渲染
const printUrl = 'https://juejin.cn'; // 向浏览器输入URL

// const action = '--print-to-pdf'; // 将url保存为pdf
// const outputName = path.resolve(__dirname, 'assets', `${Date.now()}.pdf`); // 保存文件路径

// const action = '--screenshot'; // 将url保存为图片快照
// const outputName = path.resolve(__dirname, 'assets', `${Date.now()}.png`); // 保存文件路径

const action = '----dump-dom'; // 抓取网页信息
const outputName = path.resolve(__dirname, 'assets', `${Date.now()}.txt`); // 保存文件路径

// 创建子进程执行命令
const result = process.spawnSync(chromeUrl, [
  headLess,
  disableGpu,
  action,
  // `${action}=${outputName}`,
  printUrl,
])

fs.writeFileSync(outputName, result.stdout.toString());

console.log(result.stderr.toString());