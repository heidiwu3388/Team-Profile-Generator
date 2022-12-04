// bring in all the libraries
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
    // start with a set of questions for the manager
    inquirer.prompt(questionsForManager)
    .then ((answers) => {
        // create a new Manager by input data
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // add the newly created manager to the team
        team.addMember(manager);
        // ask if done or want to add some more team members
        askToContinue();        
    })
}

function askToContinue() {
    // ask user to choose from a list [Engineer, Intern, quit]
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
                    console.log(chalk.green("The HTML file is generated successfully in the ./dist/ folder!!!!"));
                }
                // exit the application
                process.exit(0);
            });
        }
    })
}

function askEngineerInfo() {
    console.log(chalk.green("============="));
    console.log(chalk.green("   Engineer  "));
    console.log(chalk.green("============="));
    // ask user to input the engineer's information
    inquirer.prompt(questionsForEngineer)
    .then ((answers) => {
        // create a new Engineer by user input
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        // add the newly created Engineer to the team
        team.addMember(engineer);
        // ask if done or want to add some more team members
        askToContinue();
    })
}

function askInternInfo() {
    console.log(chalk.magenta("==========="));
    console.log(chalk.magenta("   Intern  "));
    console.log(chalk.magenta("==========="));
    // ask user to input the intern's information
    inquirer.prompt(questionsForIntern)
    .then ((answers) => {
        // create a new Intern by user input
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        // add the newly created Intern to the team
        team.addMember(intern);
        // ask if done or want to add some more team members
        askToContinue();        
    })
}


function addCardsToPage(cards) {
    // return a HTML page with dynamically generated cards passing as a parameter
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


