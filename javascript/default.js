// default parameters

let multi = (num1 = 10, num2 = 34, num3 = 4.8) => {


    let product = num1 * num2 * num3;
    console.log(product);
}

multi(2.9, 9.3, 78);


// default parameters
function name1(name = "Fahad kiberu") {

    return name
}
console.log(name1())

// default parameters

let taxRate = () => 0.1;
let getPrice = function(Price, tax = Price * taxRate()) {
    return Price + tax
}
let fullprice = getPrice(100);
console.log(fullprice);