const Employee = require("./Employee");
const chalk = require("chalk");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    renderHTMLcard() {
        console.log(chalk.grey("rendering Engineer ..."));
        return `
            <div class="card">
                <div class="card-header">
                    <div class="card-header-item">${this.name}</div>
                    <div class="card-header-item">⚙️ Engineer</div>
                </div>
                <div class="card-body">
                    <div class="card-body-item">ID: ${this.id}</div>
                    <div class="card-body-item">Email: <a href="mailto:${this.email}">${this.email}</a></div>
                    <div class="card-body-item">GitHub: ${this.github}</div>
                </div>
            </div>
        `;
    }

}

module.exports = Engineer;