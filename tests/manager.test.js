const Manager = require("../lib/Manager")

describe("manager", () => {
    describe ("Initilization", () => {
        it ("should return manager for getrole", () => {
             const expectedValue = "Manager"
        const manager = new Manager ("Koko", 4, "kothiiszulasson@kitty.com", "office33")
        expect(manager.getRole()).toBe(expectedValue)
    });    
})
})

describe("manager", () => {
    describe(" ", () => {
    it('should get office Number', () => {
        const expectedValue = "office33"
        const manager = new Manager ("Koko", 4, "kothiiszulasson@kitty.com", "office33")
    expect(manager.getOfficeNumber()).toBe(expectedValue)
    });
})
})

