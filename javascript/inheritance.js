//prototype inheritances
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has loggd in');
}
User.prototype.logout = function() {
    this.online = false;
    consolelog(this.email, 'has logged out');

}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super Admin';
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email
    });
};
var userOne = new User('kiberu', 'kiberu@gmail.com');
var admin = new Admin('mukiibi', 'mukiibi@gmail.com');
var userTwo = new User('fahad', 'fahad@gmail.com');
var users = [userOne, userTwo, admin];
console.log(admin)
admin.deleteUser(users[1])
    //class inhertance
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
    