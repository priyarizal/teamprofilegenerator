// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkDown = require("../utils/generateMarkdown");
// const choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'Title',
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: 'Description',
        type: "input",
        message: "What is the description of your project?",
    },
    {
        name: 'Instructions',
        type: "input",
        message: "Please provide instructions on how to use this project",
    },
    {
        name: 'Installation',
        type: "input",
        message: "How do we install your project?",
    },
    {
        name: 'Usage',
        type: "input",
        message: "how do we use your project?",
    },
    {
        name: 'Technologies',
        type: "checkbox",
        message: "What technologies did you use for your project",
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Node.js"]
    },
    {
        name: 'License',
        type: "list",
        message: "What liscense did you use?",
        choices: ["MIT", "ISC", "IBM", "BSD-3", 'none'],
    },
    {
        name: 'Contributions',
        type: "input",
        message: "Who contributed on this project?",
    },
    {
        name: 'Tests',
        type: "input",
        message: "Have you tested your project?",
    },
    {
        name: 'Github',
        type: "input",
        message: "Link to your github",
    },
    {
        name: 'Email',
        type: "input",
        message: "Link to your Email",
    },
    {
        name: 'LinkedIn',
        type: "input",
        message: "Link to your LinkedIn",
    },

];

function writeTofile(fileName, data) {
    fs.writeFile(fileName, generateMarkDown(data), (err) => err ? console.log(err) : console.log("SUCCESS!"))

}

function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            writeTofile("README2.md", responses);
        });
}

init();