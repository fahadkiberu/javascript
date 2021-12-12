var d1 = new Date();
console.log(d1.toUTCString())
var a, b, c, d, e;
a = "water bill   " + d1;
console.log(a)
var myName;
myName = "KIBERU FAHAD";
console.log(myName)
var previousReading;
previousReading =
    0;
console.log("previous reading = " + previousReading)
var currentReading;
currentReading =
    5;
console.log("Current reading = " +
    currentReading)
var unitsUsed;
unitsUsed = currentReading - previousReading;
console.log("units used = " + unitsUsed)
const rate = 3900;
console.log(rate)
var amount;
amount = unitsUsed * rate;
console.log("Total amount =" +
    amount)