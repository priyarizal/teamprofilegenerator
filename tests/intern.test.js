const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe(" ", () => {
    it('should return intern for getrole', () => {
        const expectedValue = "Intern"
        const intern = new Intern ("Priya", 44,"piya22@gmail.com", "Mills College")
    expect(intern.getRole()).toBe(expectedValue)
    });
})
})

describe("Intern", () => {
    describe(" ", () => {
    it('should get school', () => {
        const expectedValue = "Mills College"
        const intern = new Intern ("Priya", 44, "piya22@gmail.com", "Mills College")
    expect(intern.getSchool()).toBe(expectedValue)
    });
})
})