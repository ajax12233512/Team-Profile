const Engineer = require('../lib/Engineer');

let newEngineer = new Engineer('Sam', 2, 'sam@sam.com', 'samMan12');

describe('Engineer Methods', () => {
    test('Get Name Method', () => {
        expect(newEngineer.getName()).toEqual('Sam');
    })
    test('Get Id Method', () => {
        expect(newEngineer.getId()).toEqual(2);
    })
    test('Get Email Method', () => {
        expect(newEngineer.getEmail()).toEqual('sam@sam.com');
    })
    test('Get Git Method', () => {
        expect(newEngineer.getGithub()).toEqual('samMan12');
    })
    test('Get Role Method', () => {
        expect(newEngineer.getRole()).toEqual('Engineer');
    })
    
})