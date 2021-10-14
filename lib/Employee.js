class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName = () => this.name; //returns name
    getId = () => this.id;  //returns id
    getEmail = () => this.email;    //retunrs email
    getRole = () => 'Employee';
    logInfo = () => console.log(`This is ${this.name} with id of ${this.id}`);  //writes info
}

module.exports = Employee;
