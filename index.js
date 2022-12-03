const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Team = require("./lib/Team");
const renderHTML = require("./lib/renderHTML");
const {questionsForManager, 
    questionsForEngineer, 
    questionsForIntern,
    questionForContinue} = require("./lib/questions");

// create a new empty team
var team = new Team;

// buiid the team
buildTeam();

function buildTeam() {
    console.log(chalk.blue("******************************************"));
    console.log(chalk.blue("* Welcome to the Team Profile Generator! *"));
    console.log(chalk.blue("******************************************"));
    console.log(chalk.green("Let's build your team now:"));
    
    inquirer.prompt(questionsForManager)
    .then ((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.addMember(manager);
        askToContinue();        
    })
}

function askToContinue() {
    inquirer.prompt(questionForContinue)
    .then((answers) => {
        if (answers.choice === "Engineer") {
            askEngineerInfo();
        } else if (answers.choice === "Intern") {
            askInternInfo();
        } else {
            // render HTML using the team member information
            html = renderHTML(team.members);
            // write HTML to file
            fs.writeFile("./dist/index.html", html, (error) => {
                if (error) {
                    console.log(chalk.red("Write file error: ", error));
                } else {
                    console.log(chalk.green("HTML generated successfully in the ./dist/ folder!!!!"));
                }
                process.exit(0);
            });
        }
    })
}

function askEngineerInfo() {
    inquirer.prompt(questionsForEngineer)
    .then ((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.addMember(engineer);
        askToContinue();
    })
}

function askInternInfo() {
    inquirer.prompt(questionsForIntern)
    .then ((answers) => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        team.addMember(intern);
        askToContinue();        
    })
}



