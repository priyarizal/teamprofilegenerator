const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/generateHTML");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamMembers = []


function createManager() {
    inquirer
        .prompt([
            // manager question section
            {
                type: 'input',
                message: 'What is the team managers name?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'What is the team managers id?',
                name: 'managerId',
            },
            {
                type: 'input',
                message: 'What is the team managers email?',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'What is the team managers office number?',
                name: 'managerOffice',
            },
        ]).then((answers) => {
            // console.log(answers)

            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
            teamMembers.push(manager)
            buildTeam();

        })
}

// this prompt message creates a list of types of employees to add

const employeeType = [
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'employeeType',
        choices: ['Engineer', 'Intern', 'None'],
    },
];

// engineer question section
function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your engineers name?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is your engineers ID',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'What is your engineers email?',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'What is your engineers Github username?',
                name: 'engineerGithub',
            },
        ])
        .then((answers) => {
            // console.log(answers)

            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer)
            buildTeam();
        })
};

// intern question section
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your interns name?',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'What is your interns ID?',
                name: 'internId',
            },
            {
                type: 'input',
                message: 'What is your interns email?',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'What is your intens school?',
                name: 'internSchool',
            },
        ])
        .then((answers) => {
            // console.log(answers)

            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMembers.push(intern)
            buildTeam();
        })

};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => err ? console.log(err) : console.log("SUCCESS!"))
}

// TODO: Create a function to initialize app
function init() {
    createManager();

}

function buildTeam() {
    inquirer
        .prompt(employeeType)

        .then((userChoice) => {
            switch (userChoice.employeeType) {
                case "Engineer":
                    createEngineer()
                    break;
                case "Intern":
                    createIntern()
                    break;
                case "None":
                    writeToFile(`./dist/team_${teamMembers[0].getName()}.HTML`, teamMembers);
                default: ""
            }

        })

}

init();
