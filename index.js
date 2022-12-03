const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Team = require("./lib/Team");
const {questionsForManager, 
    questionsForEngineer, 
    questionsForIntern,
    questionForContinue,
    questiionForContinue} = require("./lib/questions");
const chalk = require("chalk");

// create a new empty team
var team = new Team;

// buiid the team
buildTeam();

function buildTeam() {
    console.log(chalk.blue("******************************************"));
    console.log(chalk.blue("* Welcome to the Team Profile Generator! *"));
    console.log(chalk.blue("******************************************"));
    console.log(chalk.red("Let's build your team now:"));
    
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
            console.log(team.getAllMembers());
            process.exit(0);
        }
    })
}

function askEngineerInfo() {
    inquirer.prompt(questionsForEngineer)
    .then ((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.addMember(engineer);
        return;
    })
    .then (askToContinue);
}

function askInternInfo() {
    inquirer.prompt(questionsForIntern)
    .then ((answers) => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        team.addMember(intern);
        askToContinue();        
    })
}



