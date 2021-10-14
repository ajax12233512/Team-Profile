const Manager = require('../lib/Manager');

let newManager = new Manager('Rick', 4, 'rickManager@manager.com', 3);

describe('Employee Methods', () => {
    test('Get Name Method', () => {
        expect(newManager.getName()).toEqual('Rick');
    })
    test('Get Id Method', () => {
        expect(newManager.getId()).toEqual(4);
    })
    test('Get Email Method', () => {
        expect(newManager.getEmail()).toEqual('rickManager@manager.com');
    })
    test('Get Role Method', () => {
        expect(newManager.getOfficeNum()).toEqual(3);
    })
    test('Get Role Method', () => {
        expect(newManager.getRole()).toEqual('Manager');
    })
})
