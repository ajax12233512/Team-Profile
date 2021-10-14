const Employee = require('../lib/Employee.js');
// const jest = require('jest');

let newEmployee = new Employee('Bob', 1, 'Bob@bob.com');

describe('Employee Methods', () => {
    test('Get Name Method', () => {
        expect(newEmployee.getName()).toEqual('Bob');
    })
    test('Get Id Method', () => {
        expect(newEmployee.getId()).toEqual(1);
    })
    test('Get Email Method', () => {
        expect(newEmployee.getEmail()).toEqual('Bob@bob.com');
    })
    test('Get Role Method', () => {
        expect(newEmployee.getRole()).toEqual('Employee');
    })
    
})