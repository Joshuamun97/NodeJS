// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questionsInput = [
    {type: 'input',
    name: 'projectTitle',
    message: 'What is your Project Title?'
    },

    {type: 'input',
    name: 'Description',
    message: 'What is the description of your project?'
    },

    {type: 'input',
    name: 'Usage',
    message: 'What would you use this Application for?'
    },

    {type: 'input',
    name: 'Contributions',
    message: 'Any Notable Contributers?'
    },

    {type: 'input',
    name: 'Installation',
    message: 'Please input the steps you took to install/create this application'
    },

    {type: 'input',
    name: 'email',
    message: 'Please input your email'
    },

    {type: 'input',
    name: 'github',
    message: 'Please input your github username'
    },
    
    {type: 'input',
    name: 'License',
    message: 'Lastly, Do you have a licence you wish to include? if none, please input N/A'
    },
];

inquirer.prompt(questionsInput)
    .then(answers => {
        createMD(answers)

});
// TODO: Create a function to write README file
const createMD = data => {
    
const MD = 
`# ${data.projectTitle}

## Table of Contents

- [Description](#Description)

- [Usage](#Usage)

- [Contributions](#Contributions)

- [Installation](#Installation)

- [Questions](#Questions)

- [License](#License)

## Description
${data.Description}

## Usage
${data.Usage}

## Contributions
${data.Contributions}

## Installation
${data.Installation}

## Questions
Email: ${data.email}
Github: ${data.github}

## License
${data.License}
`
    console.log(MD);
    fs.writeFile('README.md', MD, err => {
        err ? console.log(err) : console.log('Success!')
    });
};
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
