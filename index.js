const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

let finalHTML = require('./src/buildHTML');

let teamMembers = [];

function createHTMLfile (data) {
  fs.writeFile('./dist/testhtml.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("HTML file was created, and is located in the 'dist' folder.\n");
    }
  })
};

function receiveFinalHTML(data) {
  return createHTMLfile(data);
}

function passToBuildHTML(teamMembers) {
  finalHTML = buildHTML(teamMembers);
  return receiveFinalHTML(finalHTML);
}

const addIntern = async (teamMembers) => {

  const newInternPrompts = [
    {
      type: 'input',
      name: 'internName',
      message: "What is the Intern's NAME? "
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is the Intern's ID? ",
      validate: function(internId) {
        idIsValid = /^[0-9]*$/g.test(internId);

        if (idIsValid == true && internId.length == 4) {
          return true;
        } else {
          console.log("!!!\nID Numbers are only 4 digits, only numbers.\nTry again.\n!!!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the Intern's EMAIL? ",
      // VALIDATION 'if' came from Regex
      validate: function(internEmail) {
        
        emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)
        
        if (
          emailIsValid == true
            &&
          managerEmail.length <= 35
            &&
          managerEmail.length >= 5) {
          return true;
        } else {
          console.log("\n  !!!\nInvalid email address format.  Please try again.\n  !!!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is the Intern's SCHOOL? "
    }
  ]

  let newIntern = await inquirer.prompt(newInternPrompts);

  let intern = new Intern (newIntern.internName, newIntern.internId, newIntern.internEmail, newIntern.internSchool);

  teamMembers.push(intern);

  qToAddNewTeamMember(teamMembers);
}

const addEngineer = async (teamMembers) => {

  const newEngineerPrompts = [
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the Engineer's NAME? "
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the Engineer's ID? ",
      validate: function(engineerId) {
        idIsValid = /^[0-9]*$/g.test(engineerId);

        if (idIsValid == true && engineerId.length == 4) {
          return true;
        } else {
          console.log("!!!\nID Numbers are only 4 digits, only numbers.\nTry again.\n!!!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the Engineer's EMAIL? ",
      // VALIDATION 'if' came from Regex
      validate: function(engineerEmail) {
        
        emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail)
        
        if (
          emailIsValid == true
            &&
          managerEmail.length <= 35
            &&
          managerEmail.length >= 5) {
          return true;
        } else {
          console.log("\n  !!!\nInvalid email address format.  Please try again.\n  !!!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is the Engineer's GITHUB USERNAME? "
    }
  ]

  const newEngineerInfo = await inquirer.prompt(newEngineerPrompts);

  const engineer = new Engineer (newEngineerInfo.engineerName, newEngineerInfo.engineerId, newEngineerInfo.engineerEmail, newEngineerInfo.engineerGithub);

  teamMembers.push(engineer);

  qToAddNewTeamMember(teamMembers);
}

const qToAddNewTeamMember = async (teamMembers) => {
  const newTeamMemberPrompts = [
    {
      type: 'list',
      name: 'chooseToAddAnother',
      message: "Which would you like to do? ",
      choices: ["Add an ENGINEER to the team.", "Add an INTERN to the team.", "BUILD the Team Page."]
    },
  ];

  let choice = await inquirer.prompt(newTeamMemberPrompts);

  if (choice.chooseToAddAnother == "Add an ENGINEER to the team.") {return addEngineer(teamMembers)} else
  if (choice.chooseToAddAnother == "Add an INTERN to the team.")   {return addIntern(teamMembers)}   else
  // {return teamMembers};
  {return passToBuildHTML(teamMembers)};
}

const getManagerInfo = async () => {
  const managerPrompts = [
    {
      type: 'input',
      name: 'managerName',
      message: "What is the Manager's NAME? "
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the Manager's ID? ",
      validate: function(managerId) {
        idIsValid = /^[0-9]*$/g.test(managerId);

        if (idIsValid == true && managerId.length == 4) {
          return true;
        } else {
          console.log("!!!\nID Numbers are only 4 digits, only numbers.\nTry again.\n!!!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the Manager's EMAIL? ",
      // VALIDATION 'if' came from Regex
      validate: function(managerEmail) {
        
        emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
        
        if (
          emailIsValid == true
            &&
          managerEmail.length <= 35
            &&
          managerEmail.length >= 5) {
          return true;
        } else {
          console.log("\n  !!!\nInvalid email address format.  Please try again.\n  !!!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is the Manager's OFFICE NUMBER (ext., 3-digit-#) ",
      // PHONE NUMBER VALIDATION 'if' came from RegexTester.com
      validate: function(managerOfficeNumber) {
        officeNumberIsValid = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g.test(managerOfficeNumber);

        if (officeNumberIsValid) {return true}
        else {
          console.log("\n  !!!\nInvalid phone number format. \nPlease try again, with a standard phone number format.\n    (Extensions are allowed, as 'x.313'.)\n  !!!");
          return false;
        }

      }
    }
  ];

  const managerInfo = await inquirer.prompt(managerPrompts);
  return managerInfo;
};

const main = async () => {
  const managerInfo = await getManagerInfo();
  const manager = new Manager (managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOfficeNumber);
  teamMembers.push(manager);
  await qToAddNewTeamMember(teamMembers);
};

main();
