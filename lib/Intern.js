const Employee = require("./Employee");
const chalk = require("chalk");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    renderHTMLcard() {
        console.log(chalk.grey("rendering Intern ..."));
        return `
            <div class="card">
                <div class="card-header">
                    <div class="card-header-item">${this.name}</div>
                    <div class="card-header-item">📚 Intern</div>
                </div>
                <div class="card-body">
                    <div class="card-body-item">ID: ${this.id}</div>
                    <div class="card-body-item">Email: <a href="mailto:${this.email}">${this.email}</a></div>
                    <div class="card-body-item">School: ${this.school}</div>
                </div>
            </div>
        `;
    }

}

module.exports = Intern;