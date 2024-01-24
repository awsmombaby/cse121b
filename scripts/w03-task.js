/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    // sumNumber = add(addNumber1, addNumber2);
    // let sum = document.querySelector("#sum").value;
    // sum.innerHTML = sumNumber;
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2){
    return number1 * number2;  
}
function multiplyNumbers(){
    let facNumber1 = Number(document.querySelector("#factor1").value);
    let facNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(facNumber1, facNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
        return dividend / divisor;
    }
function divideNumbers(){
    let dividendnum = Number(document.querySelector("#dividend").value);
    let divisornum = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividendnum, divisornum);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function gettotaldue(){
    let numeric = Number(document.querySelector("#subtotal").value);
    const totaltext = document.querySelector("#total");
    let membercheck = document.querySelector("#member").checked;
    let discount = 0;
    if (membercheck === true) {
        discount = 0.15;
    }
    memberdis = numeric * discount;
    memberdis = memberdis.toFixed(2)
    totaltext.innerHTML = `$ ${memberdis}`;
}
document.querySelector("#getTotal").addEventListener("click", gettotaldue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const numbersArray = document.querySelector("#array");
numbersArray.innerHTML = numbers;
/* Output Odds Only Array */
const oddsArray = document.querySelector("#odds");
let odds = numbers.filter(number => number % 2 === 0);
oddsArray.innerHTML = odds;

/* Output Evens Only Array */
const evensArray = document.querySelector("#evens");
let evens = numbers.filter(number => number % 2 === 1); //number就是index,變數放置位置
evensArray.innerHTML = evens;

/* Output Sum of Org. Array */
const sumArray = document.querySelector("#sumOfArray");
let sumarray = numbers.reduce((sumtotal, numbers) => sumtotal + numbers);
sumArray.innerHTML = sumarray;

/* Output Multiplied by 2 Array */
const multArray = document.querySelector("#multiplied");
let multarray = numbers.map(numbers => numbers * 2);
multArray.innerHTML = `<br>${multarray}`;

/* Output Sum of Multiplied by 2 Array */
const sumultArray = document.querySelector("#sumOfMultiplied");
let sumultarray = multarray.reduce((sumultotal, multarray) => sumultotal + multarray);
sumultArray.innerHTML = `<br>${sumultarray}`;


