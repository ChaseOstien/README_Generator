// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter a description of your application.',
        name: 'description',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License', 'ISC License', 'N/A'],
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'Are there any contributors on this application?',
        name: 'contributors',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'Do you have instructions for tests for this appication?',
        name: 'tests',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'git',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: (value) => { 
            if (value) {
                return true;
            } else { 
                return 'Enter a value to continue!';
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().replace(/ /g, '')}.md`, data, (err)=>{
        if (err) {
            console.log(err)
        }
        console.log('Your README has been created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile(answers.title, markdownContent);
    });
}

// Function call to initialize app
init();


module.exports = questions;