// classes
class Person {
    constructor(name, id, residence, nationality) {
        this.name = name;
        this.id = id;
        this.residence = residence;
        this.nationality = nationality
    }


}
let firstPerson = new Person("kizza John", "ug204792", "makindye", "Ugandan");
console.log(firstPerson);

// classes with constructors
class user {
    constructor(name, email) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this
    }
}
class Admin extends user {
    deleteuser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}
var userOne = new user('kiberu', 'kiberu@gmail.com');
var userTwo = new user('fahad', 'fahad@gmail.com');
var admin = new Admin('Hassan', 'hassan@gmail.com');
var users = [userOne, userTwo, admin];
admin.deleteuser(userOne);

// classes
class Employees {
    constructor(email, passWord) {
        this.email = email;
        this.passWord = passWord;
    }

    getInformation() {
        console.log("your email is ", this.email)
    }

    getPersonalDetails() {
        console.log("your email is ", this.email, " and password is", this.passWord)
    }
}

let j = new Employees('mahakayz @gmai.com', 'mathakayz');
j.getInformation()
j.getPersonalDetails()