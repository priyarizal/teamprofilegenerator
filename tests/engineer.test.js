const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe(" ", () => {
    it('should return engineer for getrole', () => {
        const expectedValue = "Engineer"
        const engineer = new Engineer ("Kothu", 3, "anything@gmail.com", "idk")
    expect(engineer.getRole()).toBe(expectedValue)
    });
})
})

//practice
describe("Engineer", () => {
    describe(" ", () => {
    it('should get github username', () => {
        const expectedValue = "idk"
        const engineer = new Engineer ("Kothu", 3, "anything@gmail.com", "idk")
    expect(engineer.getGithub()).toBe(expectedValue)
    });
})
})