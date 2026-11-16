// An Operator is a Symbol that performs an operation on values. Js groups its operator into a few  main types. 
// 10+3 . + is Oerator. 10,3 operands.
// Assignment, Comparison, Arithmatic, nullish, String, type, logical.

// Arithmatic
let a1 = 10+3; // 2 operators.
let b1 = 2;
let sum = a1 + b1;
let diff = a1 - b1;
let mul = a1 * b1;
let div = a1 / b1;
let remainder = a1 % b1;

console.log(sum);
console.log(diff);
console.log(mul);
console.log(div);
console.log(remainder);

console.log (101 % 2);
console.log (100 % 2); // Modulus

console.log (101 ** 2); // Exponential. 101 power 2


//Assignment (=)

let a = 10;
a = "Assigment";
console.log(a); // Latest value will be assigned.

let x1 = 10;
x1 = x1 + 5;
console.log(x1); // 15

// Comparison (== , ===) (== : Loose comparison : Here we check only value) (=== : Strict Comaprison: Here we check type and content)
// ()

console.log(3 == "3"); // true
console.log(3 === "3"); // false

console.log(3 != "3"); // false
console.log(3 !== "3"); // true
//console.log(3 !==+ "3"); // invalid operator

console.log(3 === 3); // true

// Logical (&& And gate) (|| OR gate)

let l1 = true;
let l2 = false;

console.log(l1 && l2); // false
console.log(l1 || l2); // true
console.log(!l1); // false

// Confusing Comparison
console.log("" == 0); // true
console.log("0" == 0); // true
console.log("" == "0"); // false.  Transitivity broken concept. Coerced concept.

// Always use ==== in automation.

//Examples
console.log(3 != "3"); // false. Loose comparison
console.log(3 !== "3"); // true. Strict comparison


// Concatenation
let name = "Hi, ";
console.log(typeof name); // String
name += "Saurabh";
console.log(name); // Concatenate "Hi, Saurabh"

console.log("Saurabh", "Gulati"); // This is normal printing the text
console.log("Saurabh" + "Gulati"); // This is concatenation

// Ternary Operator
// Condition either this ot that.
// Syntax: Condition ? if(true) do this : If (False) do this.
// condition ? value (if true) : value (if false)

let age = 30;
let can_I_Travel = age > 18 ? "Yes" : "No";
console.log(can_I_Travel); // Yes

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log(testResult); // Pass

let env = "Staging";
let baseEnv = env === "Prod" ? "Prod" : "Stage";
console.log(baseEnv); // Stage . Failing the condition

let isCI = true;
let browserMode = isCI ? "headless" : "Headed";
console.log("Launching Browser in", browserMode , "mode"); // Headless

// Template Literal

let respTime = 850; 
let sla = 1000;
let slaStatus = respTime <= sla ? "Within Sla" : "Sla Breached";
console.log(`Response: ${respTime} - ${slaStatus}`); // Start with tilt charcater. User $ with curly bracket to print the value

let condition = true;
let isMale = condition ? "True" : "False"
console.log(isMale);
console.log(`Value is: ${isMale}`); // True

// Nested Ternary

let age1 = 30;
let can_I_Travel_again = age1 > 18 ? (age1 > 25 ? "Travel Alone" : "Travel with Family") : "No";
console.log(`You can Travel: ${can_I_Travel_again}`); // Travel Alone

let statusCode = 404;
let category = 
            statusCode < 300 ? "Success" :
            statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";

console.log(`The value of Category: ${category}= ${statusCode}`); // 404, Client Error

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
        (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
        (temp >= 10) ? "Cool" : "Cold";

console.log(`Temparture is ${temp} and feel is ${feel}`); // Temp is 35 and feel is hot

// Increment and Decrement
// Pre and Post 
// pre : let a = 10; ++a . First increase the value by 1 then assign
// post : let a = 10, a++ . First assign the value then increase by 1.

let pre = 10;
let pre1 = ++pre;
console.log(pre); //11
console.log(pre1); //11

let post = 10;
let post1 = post++;
console.log(post); //11
console.log(post1); //10

let num = 10;
console.log(++num + num); // 22. ++num becomes 11. num is increment by 1. num value also becomes 11.
console.log(num); // 11

let x = 10;
console.log(++x + x + x++); // 33. ++x becomes 11. x is increment by 1. x++ value also becomes 11 but increase the x by 1 after assiging. So X becomes 12
console.log(x); // 12

let i = 1;
let result = i++ + ++i;
console.log(result); // 4
console.log(i); // 3

let pred = 10;
let pred1 = --pred;
console.log(pred1, pred); // 9 9

let postd = 10;
let postd1 = postd--;
console.log(postd1, postd); // 10 9

// Nullish Operator. This is used with ?? (double question mark). Only works when assigned value is null. Nulliosh Coalescing.

let saurabh = null;
let val = saurabh ?? "SG";
console.log(val); //SG

let apiResp = null;
let assignedResp = apiResp ?? "{}";
console.log(assignedResp);

let apiResp1 = "New";
let assignedResp1 = apiResp1 ?? "{}";
console.log(assignedResp1); // New




