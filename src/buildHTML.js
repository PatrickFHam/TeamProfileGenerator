function createManagerCard (manager) {
  const managerRawHTML = `
    <div class="card manager-card mx-2" style="width: 18rem;">
      <img src="./assets/images/managerlogo.jpg" class="card-img-top" alt="managerlogo">
      <div class="card-body">
        <h3 class="card-title role-on-card role-is-manager">Project Manager</h3>
        <h5 class="card-text name-on-card">${manager.name}</h5>
        <p class="card-text id-on-card">ID#: ${manager.id}</p>
        <p class="card-text email-on-card">${manager.email}</p>
        <p class="card-text office-number-on-card">Office Number: ${manager.officeNumber}</p>
        <a href="mailto:${manager.email}" class="btn btn-primary">Send an Email</a>
      </div>
    </div>
  `
  return managerRawHTML;
}

function createEngineerCard (engineer) {
  const engineerRawHTML = `
  <div class="card engineer-card mx-2" style="width: 18rem;">
    <img src="./assets/images/owllogo.jpg" class="card-img-top" alt="engineerlogo">
    <div class="card-body">
      <h3 class="card-title role-on-card role-is-engineer">Engineer</h3>
      <h5 class="card-text name-on-card">${engineer.name}</h5>
      <p class="card-text id-on-card">ID#: ${engineer.id}</p>
      <p class="card-text email-on-card">${engineer.email}</p>
      <p class="card-text github-on-card">GitHub: ${engineer.github}</p>
      <a href="mailto:${engineer.email}" class="btn btn-primary">Send an Email</a>
      <a href="https://www.github.com/${engineer.github}" class="btn btn-primary">Visit GitHub</a>
    </div>
  </div>
  `
  return engineerRawHTML;
}

function createInternCard (intern) {
  const internRawHTML = `
  <div class="card intern-card mx-2" style="width: 18rem;">
    <img src="./assets/images/burgerlogo.jpg" class="card-img-top" alt="internlogo">
    <div class="card-body">
      <h3 class="card-title role-on-card role-is-intern">Intern</h3>
      <h5 class="card-text name-on-card">${intern.name}</h5>
      <p class="card-text id-on-card">ID#: ${intern.id}p>
      <p class="card-text email-on-card">${intern.email}</p>
      <p class="card-text school-on-card">School: ${intern.school}</p>
      <a href="mailto:${intern.email}" class="btn btn-primary">Send an Email</a>
    </div>
  </div>
  `
  return internRawHTML;
}



function buildHTML (teamMembers) {
  console.log("array was successfully passed to the new JS file.")

  let arrayToBuild = [];



};