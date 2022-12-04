const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Team = require("./lib/Team");
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
    console.log(chalk.blue("Let's build your team now:"));
    
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
            // render HTML cards for all members of the team
            cards = team.renderHTMLcards();
            // add the cards to the full HTML page
            html = addCardsToPage(cards);
            // write HTML to file
            fs.writeFile("./dist/index.html", html, (error) => {
                if (error) {
                    console.log(chalk.red("Write file error: ", error));
                } else {
                    console.log(chalk.green("HTML and CSS are generated successfully in the ./dist/ folder!!!!"));
                }
                process.exit(0);
            });
        }
    })
}

function askEngineerInfo() {
    console.log(chalk.green("============="));
    console.log(chalk.green("   Engineer  "));
    console.log(chalk.green("============="));
    inquirer.prompt(questionsForEngineer)
    .then ((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.addMember(engineer);
        askToContinue();
    })
}

function askInternInfo() {
    console.log(chalk.magenta("==========="));
    console.log(chalk.magenta("   Intern  "));
    console.log(chalk.magenta("==========="));
    inquirer.prompt(questionsForIntern)
    .then ((answers) => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        team.addMember(intern);
        askToContinue();        
    })
}


function addCardsToPage(cards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
            My Team
        </header>
        <main>
            <div class="container">
                ${cards}
            </div>
        </main>
      </body>
    </html>
    `;
}


