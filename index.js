const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let engineerArray = [];
let internArray = [];
let managerArray = [];

const Managerquestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter name of manager'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter employee ID of manager'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter manager email'
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'Enter manager office number'
    }
];

const otherEmployeeAdd = [
    {
        type: 'list',
        name: 'newEmployee',
        message: 'What kind of employee would you like to add?',
        choices: ['None Im Finished', 'Engineer', 'Intern']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message : 'Enter Engineer Name:'
    },
    {
        type: 'input',
        name: 'engineerId',
        message : 'Enter Engineer Employee Id:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message : 'Enter Engineer Email:'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message : 'Enter Engineer Github Username:'
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message : 'Enter Intern Name:'
    },
    {
        type: 'input',
        name: 'internId',
        message : 'Enter Intern Id:'
    },
    {
        type: 'input',
        name: 'internEmail',
        message : 'Enter Intern Email:'
    },
    {
        type: 'input',
        name: 'internSchool',
        message : 'Enter Intern School:'
    }
];

async function promptManagerInfo(){
    await inquirer.prompt(Managerquestions).then(answers => {
        managerArray.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum));
    });
}

async function promptEngineerInfo(){
    await inquirer.prompt(engineerQuestions).then(answers => {
        engineerArray.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub));
    });
}

async function promptInternInfo(){
    await inquirer.prompt(internQuestions).then(answers => {
        internArray.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool));
    });
}

async function newEmployee(){
    await inquirer.prompt(otherEmployeeAdd).then(async (answers) => {
        if(answers.newEmployee === 'Engineer')
        {
            await promptEngineerInfo()
            await newEmployee();
        }
        else if(answers.newEmployee === 'Intern')
        {
            await promptInternInfo()
            await newEmployee();
        }
        else if(answers.newEmployee === 'None Im Finished')
        {
            return false;
        }
    }) 
}

function displayInfo(employee){
    let string = `
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <h1 class="title">${employee.getName()}</h1>
                    <h2 class="subtitle">${employee.getRole()}</h2>
                    <div class="card">
                        <div class="card-content">
                            <p class="subtitle">ID : ${employee.getId()}</p>
                            <p class="subtitle">Email : ${employee.getEmail()}</p>
                            <p class="subtitle">OfficeNum : ${employee.getOfficeNum()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    return string;
}

function displayEngineerInfo(employee){
    let string = `
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <h1 class="title">${employee.getName()}</h1>
                    <h2 class="subtitle">${employee.getRole()}</h2>
                    <div class="card">
                        <div class="card-content">
                            <p class="subtitle">ID : ${employee.getId()}</p>
                            <p class="subtitle">Email : ${employee.getEmail()}</p>
                            <p class="subtitle">Github : ${employee.getGithub()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    return string;
}

function displayInternInfo(employee){
    let string = `
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child box">
                    <h1 class="title">${employee.getName()}</h1>
                    <h2 class="subtitle">${employee.getRole()}</h2>
                    <div class="card">
                        <div class="card-content">
                            <p class="subtitle">ID : ${employee.getId()}</p>
                            <p class="subtitle">Email : ${employee.getEmail()}</p>
                            <p class="subtitle">School : ${employee.getSchool()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    return string;
}

async function init(){
    await promptManagerInfo();
    await newEmployee();
    let newManagerHtml = displayInfo(managerArray[0]);
    let newEngineerHtml = engineerArray.map(element => {
        return displayEngineerInfo(element);
    }).join('');
    let newInternHtml = internArray.map(element => {
        return displayInternInfo(element);
    }).join('');
    let samplehtml = newManagerHtml  + newEngineerHtml + newInternHtml; 
    fs.writeFile('sample.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="box is-primary">
            <h1 class="title has-text-centered">Team Profile</h1>
        </div>
        <div class="container">
            ${samplehtml}
        </div>
    </body>
    </html>`, () => console.log("HTML FILE CREATED: sample.html"));
}

init();





        