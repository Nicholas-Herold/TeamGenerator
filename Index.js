const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const genhtml = require('./dist/genhtml')


let teamMem = [];

const questManager= () => {
    inquirer
    .prompt([
        {
    type: "input",
    message: "Hello Manager what is your name?",
    name: "name"
        },
        {
            type: "input",
            message: "Please enter your Manager ID",
            name: "id"       
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
          },
          {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
          }
          
        ])
        .then((data) => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamMem.push(manager);
            questAddRole();
            
        });
}



const questAddRole = () => {
    inquirer
    .prompt([
        {
            type: "list",
              message: "would you like to add a team member?",
              name: "choice",
              choices:  ['Engineer', 'Intern', "No Thanks"],
        }
    ])
    .then((data) => {
        if (data.choice === 'Engineer'){
            questEngin();
        }
        else if (data.choice === 'Intern'){
            questIntern();
        }
        else{"S"}
    })
}



const questEngin = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Your name",
            name: "name",
          },
          {
            type: "input",
            message: "What is your id Number?",
            name: "id",
          },
          {
            type: "input",
            message: "What is your email?",
            name: "email",
          },
          {
            type: "input",
            message: "What is your Github userName?",
            name: "gitUser",
          },
    ])
    .then((data) => {
        let engineer = new Engineer(data.name, data.id, data.email, data.gitUser);
        teamMem.push(engineer);
        questAddRole();
        
    });
}

const questIntern =() => {
    inquirer
    .prompt([
        
            {
              type: "input",
              message: "Please enter your name",
              name: "name",
            },
            {
              type: "input",
              message: "What is your id Number?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your email?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your school?",
              name: "school",
            },

    ])
    .then((data) => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        teamMem.push(intern);
        questAddRole();
        
    });
    
}


questManager();