// Manager card
const generateManagerPage = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.nameInput}</h3>
                <h4>Manager</h4><i class="fas fa-mug-hot"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineerPage = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-secondary">
                <h3 class="text-white">${engineer.nameInput}</h3>
                <h4 class="text-white">Engineer</h4><i class="fas fa-glasses"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateInternPage = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
        <div class="card-header bg-secondary">
                <h3 class="text-white">${intern.nameInput}</h3>
                <h4 class="text-white">Intern</h4><i class="fas fa-user-graduate"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// pushing array to page 
generateHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const types = employee.getType(); 

        // calling manager function
        if (types === 'Manager') {
            const managerCard = generateManagerPage(employee);

            pageArray.push(managerCard);
        }
        // calling engineer function
        if (types === 'Engineer') {
            const engineerCard = generateEngineerPage(employee);

            pageArray.push(engineerCard);
        }

        // calling intern function 
        if (types === 'Intern') {
            const internCard = generateInternPage(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeTypeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generatePageofTeam(employeeTypeCards); 
    return generateTeam;

}

// generate html page 
const generatePageofTeam = function (employeeTypeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team Profile</title>

      <!-- Style -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <link href="https://fonts.googleapis.com/css2?family=Nova+Round&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="dist/style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeTypeCards}
              </div>
          </div>
      </main>
  <footer> <p>Made with ❤ by <a href="https://github.com/Nehailaa">Nehaila Ait Belouali</a></p></footer>

  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
`;
}

// export to index
module.exports = generateHTML; 