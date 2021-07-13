const Employee = require("./employee");
class Engineer extends Employee {
    constructor(name, id, email, gitUser){
        super(name, id, email)
        this.gitUser = gitUser

    }
    getGithub(){
        return this.gitUser
    };
    getRole(){
        return "Engineer"
    };
};

module.exports = Engineer;