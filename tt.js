/*let i = 0;
for (let i = 0; i < 10; i++) {
    console.log(i);
}


function sayHi(name) {
    console.log(`Hi ${name}`)
}
sayHi("Fahad");
sayHi("kiberu");
sayHi("hassan");
sayHi("hawah");

function add(a, b) {
    return a + b;
}
const sum = add(13, 13)
const sum1 = add(100, 13)
const sum2 = add(50, 13)
const sum3 = add(70, 13)

console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);

function say(message = 'Hi') {
    console.log(message);
}
say();
say("hello")
let taxRate = () => 1.5;
let getPrice = function(price, tax = price * taxRate()) {
    console.log(tax);
    return price + tax
}
let fullprice = getPrice(1000);
//console.log(tax);
console.log(fullprice);
//rest parameters...
function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a
    }
    return total
}
sum(1, 2, 3, 4)
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName()); 
class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName());
for (let i = 0; i < 3; i++) {
    console.log(i);
} */
//classes
class person {
    constructor(name, year_born) {
        this.name = name;
        this.age = age;

    }
}
get age() {
    return this.calcAge();
}
calcAge() {

    return new Date().getFullYear() - this.year_born;
}
what() {

    console.log(this.name + 'ia a person.')
}
var me = new person("KIBERU FAHAD", 2002)
console.log(me.name + "
        was born in "+me.year_born.)
        //classes unnamed
        var person2 = class {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        };
        // classes named
        var person3 = class person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        };