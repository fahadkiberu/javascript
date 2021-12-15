// how to us a constructor function
class Person {
    constructor(name, age, dateofbrith, email, address) {
        this.name = name;
        this.age = age;
        this.dateofbrith = dateofbrith;
        this.email = email;
        this.address = address;

    }

    getemail() {
        return this.email
    }

}
let newtracy = new Person('Kiberu Fahad', 20, "09-04-2002", 'fahadkiberu!@gmail.com', 'Buziga');
console.log(newtracy.getemail())