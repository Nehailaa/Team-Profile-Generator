const Intern = require('../lib/Intern');
  
test('creates an Intern object', () => {
    const intern = new Intern('Nehaila', 77, 'nehailakarmel@gmail.com', 'SMU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('Getting the employee school', () => {
    const intern = new Intern('Nehaila', 77, 'nehailakarmel@gmail.com', 'SMU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Getting the type of employee', () => {
    const intern = new Intern('Nehaila', 77, 'nehailakarmel@gmail.com', 'SMU');

    expect(intern.getType()).toEqual("Intern");
}); 