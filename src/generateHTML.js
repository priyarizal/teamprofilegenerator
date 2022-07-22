function changeData(data) {
    console.log(data)
    
    console.log(engineer)
}


function generateHtml(data) {
    const engineer = data.filter((engineer)=> {return engineer.getRole() === "Engineer"})
    const intern = data.filter((intern)=> {return intern.getRole() === "Intern"})
    
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/style.css" >
    <title>Profile Generator</title>
    </head>
    
    <body>
    <header>My Team</header>
    
    
    <h3>Name: ${data[0].getName()}</h3>
    <h2>Role: ${data[0].getRole()}</h2> 
    <h3>ID: ${data[0].getId()}</h3>
    <h3>Email: ${data[0].getEmail()}</h3>
    <h3>Office number: ${data[0].getOfficeNumber()}</h3>
    ${engineer.map((i) => {return `
    <h2>Name: ${i.getName()}</h2> 
    <h2>Role: ${i.getRole()}</h2> 
    <h3>ID: ${i.getId()}</h3>
    <h3>Email: ${i.getEmail()}</h3>
    <h3>Github: ${i.getGithub()}</h3>
    `})}
    ${intern.map((i) => {return `
    <h2>Name: ${i.getName()}</h2> 
    <h2>Role: ${i.getRole()}</h2> 
    <h3>ID: ${i.getId()}</h3>
    <h3>Email: ${i.getEmail()}</h3>
    <h3>School: ${i.getSchool()}</h3>
    `})}
    
    </body>
    </html>
    `;
}





module.exports = generateHtml;