function renderHTML(teamMembers) {
    // initialize a empty string for adding team members cards
    let allTeamMemberCards = ``;
    // for each member in the team, render HTML card according to its role,
    // append the card to the string "allTeamMemberCards"
    teamMembers.forEach(member => {
        const role = member.getRole();
        switch (role) {
            case "Manager": 
                allTeamMemberCards += renderManagerCard(member);
                break;
            case "Engineer": 
                allTeamMemberCards += renderEngineerCard(member);
                break;
            case "Intern": 
                allTeamMemberCards += renderInternCard(member);
                break;
        }
    });
    // add the member cards to the whole HTML document
    return addCardsToPage(allTeamMemberCards);
}

function renderManagerCard(manager) {
    return `
        <div class="card">
            <div class="card-header">
                <div class="card-header-item">${manager.name}</div>
                <div class="card-header-item">☕️ Manager</div>
            </div>
            <div class="card-body">
                <div class="card-body-item">ID: ${manager.id}</div>
                <div class="card-body-item">Email: ${manager.email}</div>
                <div class="card-body-item">Office number: ${manager.officeNumber}</div>
            </div>
        </div>
    `;
}

function renderEngineerCard(engineer) {
    return `
        <div class="card">
            <div class="card-header">
                <div class="card-header-item">${engineer.name}</div>
                <div class="card-header-item">⚙️ Engineer</div>
            </div>
            <div class="card-body">
                <div class="card-body-item">ID: ${engineer.id}</div>
                <div class="card-body-item">Email: ${engineer.email}</div>
                <div class="card-body-item">GitHub: ${engineer.github}</div>
            </div>
        </div>
    `;
}

function renderInternCard(intern) {
    return `
        <div class="card">
            <div class="card-header">
                <div class="card-header-item">${intern.name}</div>
                <div class="card-header-item">📚 Intern</div>
            </div>
            <div class="card-body">
                <div class="card-body-item">ID: ${intern.id}</div>
                <div class="card-body-item">Email: ${intern.email}</div>
                <div class="card-body-item">School: ${intern.school}</div>
            </div>
        </div>
    `;
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

module.exports = renderHTML;