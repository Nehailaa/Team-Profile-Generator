const Engineer = require('../lib/Engineer');

test('Creating an Engineer object', () => {
    const engineer = new Engineer('Nehaila', 77, 'nehailakarmel@gmail.com', 'nehailaa');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Nehaila', 77, 'nehailakarmel@gmail.com', 'nehailaa');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Nehaila', 77, 'nehailakarmel@gmail.com', 'nehailaa');

    expect(engineer.getType()).toEqual("Engineer");
});