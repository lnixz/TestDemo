const program = require('commander');

program
    .version('0.0.1')
    .description('模块自动化生成工具')
    .option('-a, --all', '默认生成全部内容')

program.parse(process.argv);

