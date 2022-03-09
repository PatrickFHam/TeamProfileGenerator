const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

// import inquirer from 'inquirer';

const addIntern = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'internName',
      message: "What is the name of the new team member? "
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is the ID of the new team member? "
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the email address of the new team member? "
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is the new team member's school?"
    },
    {
      type: 'confirm',
      name: 'addNewTeamMember',
      message: 'Would you like to ADD ANOTHER TEAM MEMBER? ',
      default: true
    }
  ];

  const { addNewTeamMember, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  console.log(answers);
  // console.log(answers.managerName);
  // console.log(answers.managerEmail);
  // console.log(answers.managerOfficeNumber);

  return addNewTeamMember ? selectNextRole(newInputs) : newInputs;
};

const addEngineer = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the name of the new team member? "
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the ID of the new team member? "
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the email address of the new team member? "
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is the new team member's GitHub username?"
    },
    {
      type: 'confirm',
      name: 'addNewTeamMember',
      message: 'Would you like to ADD ANOTHER TEAM MEMBER? ',
      default: true
    }
  ];

  const { addNewTeamMember, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  console.log(answers);
  // console.log(answers.managerName);
  // console.log(answers.managerEmail);
  // console.log(answers.managerOfficeNumber);

  return addNewTeamMember ? selectNextRole(newInputs) : newInputs;
};

const selectNextRole = async (inputs = []) => {
  const prompts = [
    {
      type: 'list',
      name: 'selectRoleOrNot',
      message: "If you'd like to create a new Team Member, select his/her role: ",
      choices: ["Engineer", "Intern", "NO MORE TEAM MEMBERS"]
    }
  ];

  const { addNewTeamMember, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  console.log(answers);
  // console.log(answers.managerName);
  // console.log(answers.managerEmail);
  // console.log(answers.managerOfficeNumber);

  if (newInputs.name === "NO MORE TEAM MEMBERS") {
    return newInputs;
  } else if (newInputs.name === "Engineer") {
    addEngineer(newInputs);
  } else {
    addIntern(newInputs);
  };

  // return addNewTeamMember ? collectMoreInputs(newInputs) : newInputs;
};

const collectManagerInputs = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'managerName',
      message: "What is the name of the team's Manager? "
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the ID of the team's Manager? "
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the Manager's email address? "
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is the Manager's office number? (phone extension, 3-digits) "
    },
    {
      type: 'confirm',
      name: 'addNewTeamMember',
      message: 'Would you like to ADD ANOTHER MANAGER MEMBER? ',
      default: true
    }
  ];

  const { addNewTeamMember, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  console.log(answers);
  console.log(answers.managerName);
  console.log(answers.managerEmail);
  console.log(answers.managerOfficeNumber);



  return addNewTeamMember ? selectNextRole(newInputs) : newInputs;
};

const main = async () => {
  const managerInputs = await collectManagerInputs();
  console.log(managerInputs);
};

main();