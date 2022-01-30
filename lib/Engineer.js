const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (nameInput, id, email, github) {
        super (nameInput, id, email);
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getType () {
        return "Engineer";
    }
}
module.exports = Engineer; 