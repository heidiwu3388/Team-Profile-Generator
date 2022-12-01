const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id', 'email' and 'officeNumber' with values set to the parameters passing to the constructor.", () => {
            // data setup
            const name = "heidi";
            const id = 33;
            const email = "heidi@gamil.com";
            const officeNumber = 3994;
            // create the case
            const heidi = new Manager(name, id, email, officeNumber);
            // make assertion
            expect(heidi.name).toEqual(name);
            expect(heidi.id).toEqual(id);
            expect(heidi.email).toEqual(email);
            expect(heidi.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {
            // data setup
            const name = "heidi";
            const id = 33;
            const email = "heidi@gamil.com";
            const officeNumber = 3994;
            // create the case
            const heidi = new Manager(name, id, email, officeNumber);
            const result = heidi.getName();
            // make assertion
            expect(result).toEqual(heidi.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {
            // data setup
            const name = "heidi";
            const id = 33;
            const email = "heidi@gamil.com";
            const officeNumber = 3994;
            // create the case
            const heidi = new Manager(name, id, email, officeNumber);
            const result = heidi.getId();
            // make assertion
            expect(result).toEqual(heidi.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {
            // data setup
            const name = "heidi";
            const id = 33;
            const email = "heidi@gamil.com";
            const officeNumber = 3994;
            // create the case
            const heidi = new Manager(name, id, email, officeNumber);
            const result = heidi.getEmail();
            // make assertion
            expect(result).toEqual(heidi.email);
        });
    });
    describe("getRole", () => {
        it("should return 'Manager'", () => {
            // data setup
            const name = "heidi";
            const id = 33;
            const email = "heidi@gamil.com";
            const officeNumber = 3994;
            // create the case
            const heidi = new Manager(name, id, email, officeNumber);
            const result = heidi.getRole();
            // make assertion
            expect(result).toEqual("Manager");
        });
    });
})