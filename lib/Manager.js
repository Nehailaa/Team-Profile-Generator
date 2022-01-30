
const Employee = require('./Employee');
class Manager extends Employee {
    constructor (nameInput, id, email, officeNumber) {
        // calling employee constructor
        super (nameInput, id, email); 
        
        this.officeNumber = officeNumber; 
    }
    getType () {
        return "Manager";
    }
}

module.exports = Manager; 