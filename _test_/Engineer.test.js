const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("New Instance", () => {
        it("should have properties 'name', 'id', 'email' and 'github' with values set to the parameters passing to the constructor.", () => {
            // data setup
            const name = "Andy";
            const id = 88;
            const email = "andy@gamil.com";
            const github = "andy1234";
            // create the case
            const andy = new Engineer(name, id, email, github);
            // make assertion
            expect(andy.name).toEqual(name);
            expect(andy.id).toEqual(id);
            expect(andy.email).toEqual(email);
            expect(andy.github).toEqual(github);
        });
    });
    describe("getName", () => {
        it("should return the value of the property 'name'", () => {
            // data setup
            const name = "Andy";
            const id = 88;
            const email = "andy@gamil.com";
            const github = "andy1234";
            // create the case
            const andy = new Engineer(name, id, email, github);
            const result = andy.getName();
            // make assertion
            expect(result).toEqual(andy.name);
        });
    });
    describe("getId", () => {
        it("should return the value of the property 'id'", () => {
            // data setup
            const name = "Andy";
            const id = 88;
            const email = "andy@gamil.com";
            const github = "andy1234";
            // create the case
            const andy = new Engineer(name, id, email, github);
            const result = andy.getId();
            // make assertion
            expect(result).toEqual(andy.id);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the property 'email'", () => {
            // data setup
            const name = "Andy";
            const id = 88;
            const email = "andy@gamil.com";
            const github = "andy1234";
            // create the case
            const andy = new Engineer(name, id, email, github);
            const result = andy.getEmail();
            // make assertion
            expect(result).toEqual(andy.email);
        });
    });
    describe("getGithub", () => {
        it("should return the value of the property 'github'", () => {
            // data setup
            const name = "Andy";
            const id = 88;
            const email = "andy@gamil.com";
            const github = "andy1234";
            // create the case
            const andy = new Engineer(name, id, email, github);
            const result = andy.getGithub();
            // make assertion
            expect(result).toEqual(andy.github);
        });
    });
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            // data setup
            const name = "Andy";
            const id = 88;
            const email = "andy@gamil.com";
            const github = "andy1234";
            // create the case
            const andy = new Engineer(name, id, email, github);
            const result = andy.getRole();
            // make assertion
            expect(result).toEqual("Engineer");
        });
    });
})