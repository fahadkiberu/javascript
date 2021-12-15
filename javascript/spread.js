// spread operator

// joining arrays
const vowels = ['a', 'e', 'i', 'o', 'e'];
const combined1 = ['b', 'c', 'd', 'f', 'h', ...vowels];
console.log(combined1);

// copying array
let car = ["V8", "premio", "benz"]
let copyCar = [...car];
console.log(copyCar);

//  joining 2 arrays

let evenNumbers = [2, 4, 6, 8, 10];
let oddNumbers = [1, 3, 7, ]
let combined = [...oddNumbers, ...evenNumbers];
console.log(combined);