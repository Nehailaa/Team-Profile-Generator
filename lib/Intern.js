
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor (nameInput, id, email, school) {
        super (nameInput, id, email); 
        this.school = school; 
    } 
    getSchool () {
        return this.school;
    }
    getType () {
        return "Intern";
    }
}

module.exports = Intern; 