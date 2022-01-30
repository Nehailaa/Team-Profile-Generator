
const Manager = require('../lib/Manager');

test('Creating a Manager object', () => {
    const manager = new Manager('Nehaila', 77, 'nehailakarmel@gmail.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Getting the type of employee', () => {
    const manager = new Manager('Nehaila', 77, 'nehailakarmel@gmail.com');

    expect(manager.getType()).toEqual("Manager");
}); 