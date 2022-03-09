const Employee = require('../lib/Employee');
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should ensure there is a name", () => {
      const intern = new Intern ("John Doe", 145, "johndoe@gmail.com", "Georgia Tech");
      expect(intern.name).toEqual("John Doe");
    })
    
    it("should ensure there is an id number", () => {
      const intern = new Intern ("John Doe", 145, "johndoe@gmail.com", "Georgia Tech");
      expect(intern.id).toEqual(145);
    })
    
    it("should ensure there is an email address", () => {
      const intern = new Intern ("John Doe", 145, "johndoe@gmail.com", "Georgia Tech");
      expect(intern.email).toEqual("johndoe@gmail.com");
    })
    
    it("should ensure there is a office number being used", () => {
      const intern = new Intern ("John Doe", 145, "johndoe@gmail.com", "Georgia Tech");
      expect(intern.school).toEqual("Georgia Tech");
    })
  })
})