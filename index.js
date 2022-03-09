const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

teamMembers = [];

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

  return addNewTeamMember ? collectTeamMemberInputs(newInputs) : newInputs;
};

const main = async () => {
  const managerInputs = await collectManagerInputs();
  console.log(managerInputs);
  
  
  const teamMemberInputs = await collectTeamMemberInputs();
  console.log(teamMemberInputs);
};

main();