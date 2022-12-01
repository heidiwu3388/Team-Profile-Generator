const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id' and 'email' with values set to the parameters passing to the constructor.", () => {
            // data setup
            const name = "Tammy";
            const id = 1;
            const email = "tammy@gamil.com";
            // create the case
            const tammy = new Employee(name, id, email);
            // make assertion
            expect(tammy.name).toEqual(name);
            expect(tammy.id).toEqual(id);
            expect(tammy.email).toEqual(email);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {
            // data setup
            const name = "Tammy";
            const id = 33;
            const email = "tammy@gamil.com";
            // create the case
            const tammy = new Employee(name, id, email);
            const result = tammy.getName();
            // make assertion
            expect(result).toEqual(tammy.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {
            // data setup
            const name = "Tammy";
            const id = 33;
            const email = "tammy@gamil.com";
            // create the case
            const tammy = new Employee(name, id, email);
            const result = tammy.getId();
            // make assertion
            expect(result).toEqual(tammy.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {
            // data setup
            const name = "Tammy";
            const id = 33;
            const email = "tammy@gamil.com";
            // create the case
            const tammy = new Employee(name, id, email);
            const result = tammy.getEmail();
            // make assertion
            expect(result).toEqual(tammy.email);
        });
    });
    describe("getRole", () => {
        it("should return 'Employee'", () => {
            // data setup
            const name = "Tammy";
            const id = 33;
            const email = "tammy@gamil.com";
            // create the case
            const tammy = new Employee(name, id, email);
            const result = tammy.getRole();
            // make assertion
            expect(result).toEqual("Employee");
        });
    });
})