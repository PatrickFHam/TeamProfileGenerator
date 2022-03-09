const Employee = require('../lib/Employee');
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should ensure there is a name", () => {
      const engineer = new Engineer ("John Doe", 145, "johndoe@gmail.com", "johndoegithub");
      expect(engineer.name).toEqual("John Doe");
    })
    
    it("should ensure there is an id number", () => {
      const engineer = new Engineer ("John Doe", 145, "johndoe@gmail.com", "johndoegithub");
      expect(engineer.id).toEqual(145);
    })
    
    it("should ensure there is an email address", () => {
      const engineer = new Engineer ("John Doe", 145, "johndoe@gmail.com", "johndoegithub");
      expect(engineer.email).toEqual("johndoe@gmail.com");
    })
    
    it("should ensure there is a office number being used", () => {
      const engineer = new Engineer ("John Doe", 145, "johndoe@gmail.com", "johndoegithub");
      expect(engineer.github).toEqual("johndoegithub");
    })
  })
})