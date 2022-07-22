
const { execPath } = require("process");
const Employee = require("../lib/Employee");

describe("employee", () => {
    describe("Initilization", () => {
        it("should be created with name, id, and email ", () => {

            const employee = new Employee("Zula", 2, "Zulaisakitty@kitty.com")

            expect(typeof(employee)).toBe("object");
            // expect(employee.email).tobe("value")
        })

    })
})


