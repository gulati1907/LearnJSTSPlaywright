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
console.log (100 % 2);

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




