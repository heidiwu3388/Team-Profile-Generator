const { default: Choice } = require("inquirer/lib/objects/choice");
const chalk = require("chalk");

const questions = {
    questionsForManager: [
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
            validate: validateRequired
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "id",
            validate: validateRequiredNumber
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email",
            validate: validateRequiredEmail
        },
        {
            type: "input",
            message: "What is the team manager's offic number?",
            name: "officeNumber",
            validate: validateRequiredNumber
        }
    ],

    questionsForEngineer: [
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name",
            validate: validateRequired
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id",
            validate: validateRequiredNumber
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email",
            validate: validateRequiredEmail
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "github",
            validate: validateRequired
        }
    ],

    questionsForIntern: [
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name",
            validate: validateRequired,
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id",
            validate: validateRequiredNumber
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email",
            validate: validateRequiredEmail
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school",
            validate: validateRequired
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

function validateRequired(name) {
    if (name.trim().length <= 0) {
        console.log(chalk.red("\nCannot be blank!"))
        return false;
    }
    return true;
}

function validateRequiredNumber(id) {
    if (id.trim().length <= 0) {
        console.log(chalk.red("\nCannot be blank!"))
        return false;
    }
    if (isNaN(id.trim())) {
        console.log(chalk.red("\nMust be a number!"))
        return false
    }
    return true;
}

function validateRequiredEmail(email)
{
	var emailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.trim().length <= 0) {
        console.log(chalk.red("\nCannot be blank!"))
        return false;
    }
    if(emailformat.test(email.trim())) {
        return true;
    } else {
		console.log(chalk.red("\nThis is not a valid email address"));
		return false;
    }
}





module.exports = questions;