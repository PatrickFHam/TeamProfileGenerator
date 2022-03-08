class Employee {
  constructor(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    
  }
}

module.exports = Employee;

/* * `name`
* `id`
* `email`
* `getName()`
* `getId()`
* `getEmail()`
* `getRole()`&mdash;returns `'Employee'` */