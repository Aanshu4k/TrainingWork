class User {
     name = "";
    constructor(Cname) {
        this.name = Cname;
    }
    sayHi() {
        console.log(this.name);
    }
}
var userObj = new User("Aanshu");//object deaclration of class type User
userObj.sayHi();