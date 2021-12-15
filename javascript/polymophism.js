// polymophism
// 
class Animal {
    constructor(animallName) {
        this.animallName = animallName;
    }

    nameOfAnimal() {
        return this.animallName;
    }
}
let cats = new Animal("cat");
console.log(cats.nameOfAnimal())

// inheriting from Aimal class
class Dog extends Animal {
    constructor(animallName, color) {
        super(animallName);
        this.color = color;
    }

    nameOfAnimal() {
        return this.animallName;
    }

    getColor() {
        console.log("It's a ", this.color, "dog");
    }
}
let dogDetails = new Dog("Dog", "brown")
console.log(dogDetails.nameOfAnimal())
dogDetails.getColor()

// inheriting from Animal class
class Birds extends Animal {
    constructor(animallName, character) {
        super(animallName);
        this.character = character;
    }

    nameOfAnimal() {
        return this.animallName;
    }
}

let bird = new Birds("Hen", 'flying');
console.log(bird.nameOfAnimal())