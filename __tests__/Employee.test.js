const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Nehaila', 77, 'nehailakarmel@gmail.com');

    expect(employee.nameInput).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// ID
test('gets employee name', () => {
    const employee = new Employee('Nehaila', 77, 'nehailakarmel@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Nehaila', 77, 'nehailakarmel@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Emails
test('gets employee email', () => {
    const employee = new Employee('Nehaila', 77, 'nehailakarmel@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Getting type from getType
test('gets role of employee', () => {
    const employee = new Employee('Nehaila', 77, 'nehailakarmel@gmail.com');

    expect(employee.getType()).toEqual("Employee");
}); 