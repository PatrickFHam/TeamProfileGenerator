const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const inquirer = require('inquirer');

jest.mock('inquirer');

describe("Validations", () => {
  describe("Manager Validations", () => {
    it("should ensure NAME has >3 and <30 characters", () => {
      let managerName = "Patrick Ham";
      function managerNameIsValid() {
        if (managerName.length >=30 || managerName.length<=3) {
          return false;
        } else {return true}
      };
      
      expect(managerNameIsValid()).toBe(true);
    })

    it("should reject if NAME has <3 characters", () => {
      let managerName = "PH";
      function managerNameIsValid() {
        if (managerName.length >=30 || managerName.length<=3) {
          return false;
        } else {return true}
      };
      
      expect(managerNameIsValid()).toBe(false);
    })

    it("should reject if NAME has >30 characters", () => {
      let managerName = "randomsequenceofletterstotestthevalidation";
      function managerNameIsValid() {
        if (managerName.length >=30 || managerName.length<=3) {
          return false;
        } else {return true}
      };
      
      expect(managerNameIsValid()).toBe(false);
    })

    })});