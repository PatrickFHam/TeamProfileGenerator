const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, school) {
    super(id, email, name);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Intern;
