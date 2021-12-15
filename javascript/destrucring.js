// destructuring

let placeHoldersNumbers = [9, 10, 27, 20];

let [x, y, z, a] = placeHoldersNumbers
console.log(x)
console.log(y)
console.log(z)
console.log(a)

for (var i = 0; i < placeHoldersNumbers.length; i++) {
    console.log(placeHoldersNumbers[i])
}


// destructuring assignment with function
function details() {

    return [2, 4, 6, 8];
}
let [p, q, r, s] = details();
console.log(p)
console.log(q)
console.log(r)
console.log(s)

// destructuring assignment with objects
let personalDetails = {
    name: 'kiberu Fahad',
    occupation: 'student',
    email: 'fahadkiberu1@gmail.com',
    contact: " 0771375221",
}

let { name, occupation, email, contact } = personalDetails
console.log(name)
console.log(occupation)
console.log(email)
console.log(contact)
    //object destructuring
const rating = [

    { user: 'john', score: 3 },
    { user: 'David', score: 4 },
    { user: 'ane', score: 5 },
    { user: 'jane', score: 2 },
]
let sum = 0;
for (const { score }
    of rating) {
    sum += score;
}
console.log(`total score :${sum}`);