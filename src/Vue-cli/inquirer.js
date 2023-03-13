var inquirer = require('inquirer');
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
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });