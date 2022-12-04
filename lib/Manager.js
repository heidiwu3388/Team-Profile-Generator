// bring in all required libraries
const Employee = require("./Employee");
const chalk = require("chalk");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    // method to render HTML card for manager
    renderHTMLcard() {
        console.log(chalk.grey("rendering Manger ..."));
        return `
            <div class="card">
                <div class="card-header">
                    <div class="card-header-item">${this.name}</div>
                    <div class="card-header-item">☕️ Manager</div>
                </div>
                <div class="card-body">
                    <div class="card-body-item">ID: ${this.id}</div>
                    <div class="card-body-item">Email: <a href="mailto:${this.email}">${this.email}</a></div>
                    <div class="card-body-item">Office number: ${this.officeNumber}</div>
                </div>
            </div>
        `;
    }

}

module.exports = Manager;