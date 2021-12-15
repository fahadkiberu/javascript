// for of loop 

const loopNumber = [4, 9, 8, 3, 21]

for (const f of loopNumber) {


    console.log(f)
}


// for of  loop 
//for of loop 
let scores = [80, 90, 70, 50];
for (let score of scores) {
    score = score + 5;

    console.log(score);
};


// for of loop

let colors = ["red", 'green', 'blue'];
for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index} `);
}