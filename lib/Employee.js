class Employee {
    constructor (nameInput, id, email) {
        this.nameInput = nameInput;
        this.id = id;
        this.email = email 
    }
    getName () {
        return this.nameInput;
    }
    getId () {
        return this.id;
    }   
    getEmail () {
        return this.email;
    }
    getType () {
        return 'Employee'; 
    }
};

module.exports = Employee; 