const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id', 'email' and 'school' with values set to the parameters passing to the constructor.", () => {
            // data setup
            const name = "Priscilla";
            const id = 17;
            const email = "priscilla@gamil.com";
            const school = "UCSD";
            // create the case
            const priscilla = new Intern(name, id, email, school);
            // make assertion
            expect(priscilla.name).toEqual(name);
            expect(priscilla.id).toEqual(id);
            expect(priscilla.email).toEqual(email);
            expect(priscilla.school).toEqual(school);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {
            // data setup
            const name = "Priscilla";
            const id = 17;
            const email = "priscilla@gamil.com";
            const school = "UCSD";
            // create the case
            const priscilla = new Intern(name, id, email, school);
            const result = priscilla.getName();
            // make assertion
            expect(result).toEqual(priscilla.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {
            // data setup
            const name = "Priscilla";
            const id = 17;
            const email = "priscilla@gamil.com";
            const school = "UCSD";
            // create the case
            const priscilla = new Intern(name, id, email, school);
            const result = priscilla.getId();
            // make assertion
            expect(result).toEqual(priscilla.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {
            // data setup
            const name = "Priscilla";
            const id = 17;
            const email = "priscilla@gamil.com";
            const school = "UCSD";
            // create the case
            const priscilla = new Intern(name, id, email, school);
            const result = priscilla.getEmail();
            // make assertion
            expect(result).toEqual(priscilla.email);
        });
    });
    describe("getSchool", () => {
        it("should return the value of the property 'school'", () => {
            // data setup
            const name = "Priscilla";
            const id = 17;
            const email = "priscilla@gamil.com";
            const school = "UCSD";
            // create the case
            const priscilla = new Intern(name, id, email, school);
            const result = priscilla.getSchool();
            // make assertion
            expect(result).toEqual(priscilla.school);
        });
    });
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            // data setup
            const name = "Priscilla";
            const id = 17;
            const email = "priscilla@gamil.com";
            const school = "UCSD";
            // create the case
            const priscilla = new Intern(name, id, email, school);
            const result = priscilla.getRole();
            // make assertion
            expect(result).toEqual("Intern");
        });
    });
})