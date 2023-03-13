

console.log(process.argv);

const inquirer = require('inquirer');
const program = require('commander');

program
    .version('0.0.1')
    .description('模块自动化生成工具')
    .action(() => {
        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    type: 'rawlist',
                    name: 'question1',
                    message: '选择生成的内容？',
                    choices: ['默认', '自定义']
                },
            ])
            .then((answers) => {
                // Use user feedback for... whatever!!
                if (answers.question1 === '默认') {
                    console.log(answers.question1);
                } else if (answers.question1 === '自定义') {
                    console.log(answers.question1);
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    })

program.parse(process.argv);



