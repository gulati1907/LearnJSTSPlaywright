// Function: A reusbale code that performs a specific task.
// Define an function and call a function.
// 
// functiona define:
// function_name (parameters){
// code which needs to executed 
// return or no return
//}
//
// FUnction call: name(arguments)
//
// Built in JS functions.
// User defined: 
// a. Type 1 : no return or no argument.
// b. Type 2 : with return or no argument.
// c Type 3 : no return or with argument.
// d. Type 4 : with return or with argument.
// e. Default Parameters.
// f. Anonymous functions.
// g. Arrow function.
// h. IIFE : Immediately Invoked Function Express.
// i. Higher -Order function.
// j. Recursive Function.

greet(); // We can call a functiona afterwards also.

function greet(){
    console.log("Hi");
}
greet();

//Type 1

function open(){
    console.log("Hello");
}

open();

// Type 2

function openAgain(){
    return("Hello");
}

let message = openAgain();
console.log(message);

