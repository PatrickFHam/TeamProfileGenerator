const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    
    it("should ensure there is an id number", () => {
      const employee = new Employee (145, "johndoe@gmail.com", "John Doe");
      expect(employee.id).toEqual(145);
    })
    
    it("should ensure there is an email address", () => {
      const employee = new Employee (145, "johndoe@gmail.com", "John Doe");
      expect(employee.email).toEqual("johndoe@gmail.com");
    })
    
    it("should ensure there is a name being used", () => {
      const employee = new Employee (145, "johndoe@gmail.com", "John Doe");
      expect(employee.name).toEqual("John Doe");
    })
  })
})