// variables, operators, overwrite
const defaultResult = 0;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 / 2 - 1;
//let calculatonDescription = '(' + currentResult + '+ 10 ) * 3/2 -1';
let calculatonDescription = `(${defaultResult} + 10)`;
// this vars are global scope
//let errorMessage = 'An error' + 'occured';
function add(num1, num2){
    const result = num1 + num2;
    /*alert('the result is ' + result);
        //or
    alert(`the result is ${result}`);*/
    return result;
}
add(5,7); //invoking function
add(4,8); //invoking again
    //const additionResult = add(1,3); 
    //or
currentResult = add(1,3); 
//num1=2;  this wont work cuz var outside function
outputResult(currentResult, calculatonDescription);

//missing arguments are set to undefined
function myFunction(x,y) {
    if (y === undefined) {
        y=2;
    }
}

//Rest Parameter
function sum(...args) {
    let sum =0;
    for (let arg of args) 
        sum = sum + arg;
    return sum;
}
let x = sum(4,6,4,5,9);

