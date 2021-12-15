// // template literals ``back ticks
let
    firstName = "Kiberu";
lastName = "Fahad";
let greeting = `Hi ${firstName} ${lastName}`;
console.log(greeting);
// // function 
function format(literals, ...substitutions) {
    let result = '';
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    //add the last literrals
    result += literals[literals.length - 1];
    return result;
}
let quatity = 9,
    priceEach = 8.99,
    result = format `${quatity} items cost $${(quatity*priceEach).toFixed(2)}.
    `
console.log(result);




// // making a sentence
let amount = 100000,
    name = 'Kiberu Fahad',
    contact = 256771375221,
    balance = amount,
    // date = currentdate,
    newbalance = amount + balance;

console.log(`You have received ${amount} from ${name}  ${contact}on your mobile money account.
You new balance is ${newbalance}. Be safe.Do NOT share your mobile money pin with anyone.`)