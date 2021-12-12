/*var x = myFunction(4, 3);
/ /
Function is called,
return value will end up in x

function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}
console.log(x)


var car = { type: "Fiat", model: "500", color: "white" };
console.log(car)

let i = 0;
while (i < 10) {
    console.log(i);
    i++
}
//classes
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};
var john = new Person("John Doe");
console.log(john.getName());*/

//gettersand setters

class person {
    constructor(name) {
        this.name = name;
    }
}
let person = new person("fahad");
console.log(person.name);