// JS User Input.
// prompt (). Only works in browser. 
// prompt-sync , readline and fs.readFile (These are node js functions for user input.)

// let num = prompt("Enter a number"); This will throw an error because of prompt function.

//Below code initially throw the error. To make prompt-sync work, First we have to run "npm init". Then run the "npm i prompt-sync" .

let prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number"));
console.log(num);

let prompt1 = require('prompt-sync')();
let name = String(prompt("Enter a name"));
console.log(`Hello, ${name}!`);

let prompt2 = require('prompt-sync')();
let data = Number(prompt2("Enter a number"));
console.log(`${data} x 1 =`, data * 1);
console.log(`${data} x 2 =`, data * 2);
console.log(`${data} x 3 =`, data * 3);
console.log(`${data} x 4 =`, data * 4);
console.log(`${data} x 5 =`, data * 5);
console.log(`${data} x 6 =`, data * 6);
console.log(`${data} x 7 =`, data * 7);
console.log(`${data} x 8 =`, data * 8);
console.log(`${data} x 9 =`, data * 9);
console.log(`${data} x 10 =`, data * 10);

// Print numbers from 1 to n. For multiples of 3, print 'Fizz'. 
// For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.

let prompt3 = require('prompt-sync')();
let data1 = Number(prompt3("Enter a number"));
console.log(data1);
for (let i = 1; i <= data1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
