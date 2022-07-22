const Engineer = require("../lib/engineer");

// function changeData(data) {
//     console.log(data)

//     console.log(engineer)
// }
const generateManager = manager => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
};
const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i <i class="fa fa-mortar-board"></i></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a target= "_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `;
};
const generateIntern = intern => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fa fa-address-card-o"></i></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School:<a target= "_blank" href ="https://www.${intern.getSchool()}.edu">${intern.getSchool()}</a></li>
        </ul>
    </div>
</div>
    `;
};

function generateTeam(data) {
    const pageHTML = [];
    pageHTML.push(data
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)));

    pageHTML.push(data
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)));

    pageHTML.push(data
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)));


    return pageHTML.join("");
}

function generateHTML(data) {
    const engineer = data.filter((engineer) => { return engineer.getRole() === "Engineer" })
    const intern = data.filter((intern) => { return intern.getRole() === "Intern" })

    return ` 
 
<!DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <link rel="stylesheet" href="style.css">
                    <script src="https://kit.fontawesome.com/c502137733.js"></script>
                </head>

                <body>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 jumbotron mb-3 team-heading">
                                <h1 class="text-center">My Team</h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="team-area col-12 d-flex justify-content-center">
                                ${generateTeam(data)}
                            </div>
                        </div>
                    </div>
                </body>
            </html>
            `;



}
module.exports = generateHTML;