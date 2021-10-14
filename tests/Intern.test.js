const Intern = require('../lib/Intern');

let newIntern = new Intern('Chris', 3, 'Chris@chris.com', 'MIT');

describe('Intern Methods', () => {
    test('Get Name Method', () => {
        expect(newIntern.getName()).toEqual('Chris');
    })
    test('Get Id Method', () => {
        expect(newIntern.getId()).toEqual(3);
    })
    test('Get Email Method', () => {
        expect(newIntern.getEmail()).toEqual('Chris@chris.com');
    })
    test('Get School Method', () => {
        expect(newIntern.getSchool()).toEqual('MIT');
    })
    test('Get Role Method', () => {
        expect(newIntern.getRole()).toEqual('Intern');
    })
})