const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, officeNumber) {
    super(id, email, name, role);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager"
  }
}

module.exports = Manager;
