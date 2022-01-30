// Link to page creation
const generateHTML = require('./src/generateHTML');

// Create team profiles
const Manager = require('./lib/Manager');
const Intern = require('./lib/Manager'); 
const Engineer = require('./lib/Engineer');

// Setting node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// start of manager prompts 
const managerPrompts = () => {
    console.log('Please answer the questions to foregather your team.');
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'nameInput',
            message: 'What is the name of the manager of this team? (Required)', 
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name in order to processed!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter your email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number? (Required)',
            validate: idInput => {
                if  (idInput) {
                    return true;
                } else {
                    console.log ("Please enter your manager's ID!")
                    return false; 
                }
            }
        },
       
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number(Required)',
            validate: officeNumberInput => {
                if  (officeNumberInput) {
                     return true;
                } else {
                    console.log ('Please enter your office number!')
                    return false;                }
            }
        }
    ])
//     .then(managerAnswers => {
//         const  { nameInput, email, id, officeNumber } = managerAnswers; 
//         const manager = new Manager (nameInput, email, id, officeNumber);

//         teamArray.push(manager); 
//         console.log(manager); 
//     })
};

const employeePrompts = () => {
    console.log(`
    =================
    *** Employees Section ***
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'type',
            message: "Please choose your employee's role (Required)",
            choices: ['Engineer', 'Intern'],
            validate: employeeType => {
                if(employeeType) {
                    return true;
                }else{
                    console.log("Please choose your employee's role");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'nameInput',
            message: "What's the employee's name? (Required)", 
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the employee's ID? (Required)",
            validate: idInput => {
                if  (idInput) {
                    return true;
                } else {
                    console.log ("The employee's ID is required!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "what's the employee's email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;     
                } else {
                    console.log ('Please enter the email address of the employee!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What's the employee's github username? (Required)",
            when: (input) => input.type === "Engineer",
            validate: githubInput => {
                if (githubInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username in order to processed!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What's the intern's school (Required)",
            when: (input) => input.type === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the school name!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'additionalEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeInfo => {
        // data for employee types 

        let { name, id, email, type, github, school, additionalEmployee } = employeeInfo; 
        let employee; 

        if (type === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (type === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (additionalEmployee) {
            return employeePrompts(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// function to generate HTML page file using FS using IF STMT
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }else{
            console.log("Great job! You have successfully foregathered your Team Profile! Please check out the index.html for results.")
        }
    })
}; 

managerPrompts()
  .then(employeePrompts)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);

  });