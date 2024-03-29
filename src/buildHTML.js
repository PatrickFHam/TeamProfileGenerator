function createManagerCard (manager) {
  const managerRawHTML = `
    <div class="card border-primary manager-card mx-2" style="width: 18rem;">
      <img src="./assets/images/managerlogo.jpg" class="card-img-top" alt="managerlogo">
      <div class="card-body">
        <h3 class="card-title name-on-card">${manager.name}</h3>
        <h5 class="card-text role-on-card role-is-manager">Project Manager</h5>
        <p class="card-text id-on-card">ID#: ${manager.id}</p>
        <p class="card-text email-on-card">${manager.email}</p>
        <p class="card-text office-number-on-card">Office Number: ${manager.officeNumber}</p>
        <a href="mailto:${manager.email}" class="btn btn-primary">Send an Email</a>
      </div>
    </div>
  `
  return managerRawHTML;
};

function createEngineerCard (engineer) {
  const engineerRawHTML = `
  <div class="card border-danger engineer-card mx-2" style="width: 18rem;">
    <img src="./assets/images/engineerlogo.jpg" class="card-img-top" alt="engineerlogo">
    <div class="card-body">
      <h3 class="card-title name-on-card">${engineer.name}</h3>
      <h5 class="card-text role-on-card role-is-engineer">Engineer</h5>
      <p class="card-text id-on-card">ID#: ${engineer.id}</p>
      <p class="card-text email-on-card">${engineer.email}</p>
      <p class="card-text github-on-card">GitHub: ${engineer.github}</p>
      <a href="mailto:${engineer.email}" class="btn btn-danger">Send an Email</a>
      <a href="https://www.github.com/${engineer.github}" target="_blank" class="btn btn-danger">Visit GitHub</a>
    </div>
  </div>
  `
  return engineerRawHTML;
};

function createInternCard (intern) {
  const internRawHTML = `
    <div class="card border-dark intern-card mx-2" style="width: 18rem;">
      <img src="./assets/images/internlogo.jpg" class="card-img-top" alt="internlogo">
      <div class="card-body">
        <h3 class="card-title name-on-card">${intern.name}</h3>
        <h5 class="card-text role-on-card role-is-intern">${intern.name}</h5>
        <p class="card-text id-on-card">ID#: ${intern.id}<p>
        <p class="card-text email-on-card">${intern.email}</p>
        <p class="card-text school-on-card">School: ${intern.school}</p>
        <a href="mailto:${intern.email}" class="btn btn-secondary">Send an Email</a>
      </div>
    </div>
    `
  return internRawHTML;
};

let finalHTML = '';

buildHTML = (teamMembers) => {
  let arrayOfCards = [];

  for (let i=0; i<teamMembers.length; i++) {
    const employee = teamMembers[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = createManagerCard(employee);
      arrayOfCards.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = createEngineerCard(employee);
      arrayOfCards.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = createInternCard(employee);
      arrayOfCards.push(internCard);
    }
  }

  const htmlOfAllEmployeeCards = arrayOfCards.join('');
  const finalHTML = buildWholePage(htmlOfAllEmployeeCards);
  
  return finalHTML;
};

function buildWholePage (htmlOfAllEmployeeCards) {
  html = 
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="./assets/css/reset.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">

    <title>My Team</title>
  </head>
  <body>
    
    <header class="bg-image d-flex flex-wrap justify-content-center py-3 border-bottom mx-0" style="background-image: url(./assets/images/headerbg.jpg)">
      <a href="" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <h1 class="fs-4 btn btn-light btn-lg">My Team</h1>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="https://www.github.com/patrickfham" target="_blank" class="nav-link">About Me</a></li>
      </ul>
    </header>

    <main>
      <div id="mainbox" class="container d-flex flex-wrap justify-content-center my-3">
      
        ${htmlOfAllEmployeeCards}

      </div>

    </main>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>`

  return html;
};