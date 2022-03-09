const Employee = require('../lib/Employee');
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should ensure there is a name", () => {
      const manager = new Manager ("John Doe", 145, "johndoe@gmail.com", 313);
      expect(manager.name).toEqual("John Doe");
    })
    
    it("should ensure there is an id number", () => {
      const manager = new Manager ("John Doe", 145, "johndoe@gmail.com", 313);
      expect(manager.id).toEqual(145);
    })
    
    it("should ensure there is an email address", () => {
      const manager = new Manager ("John Doe", 145, "johndoe@gmail.com", 313);
      expect(manager.email).toEqual("johndoe@gmail.com");
    })
    
    it("should ensure there is a office number being used", () => {
      const manager = new Manager ("John Doe", 145, "johndoe@gmail.com", 313);
      expect(manager.officeNumber).toEqual(313);
    })
  })
})