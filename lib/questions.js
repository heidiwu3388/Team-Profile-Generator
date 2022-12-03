const { default: Choice } = require("inquirer/lib/objects/choice");

const questions = {
    questionsForManager: [
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the team manager's offic number?",
            name: "officeNumber"
        }
    ],

    questionsForEngineer: [
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "github"
        }
    ],

    questionsForIntern: [
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school"
        }
    ],
    questionForContinue: [
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "choice",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]
}




module.exports = questions;