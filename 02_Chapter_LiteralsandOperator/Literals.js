// Primitive data types: String, Number, Boolean, BigInt, Symbol, Null, Undefined
// Non-Primitive data types: Array, Objects, Functions, Date object and Regular Expression. They can be further breakdown.

// Number Literals

let a = 10;
let pi = 3.14;
let negative = -100;
let hexa = 0xFF; // hexa decimal number
console.log(typeof a);
console.log(typeof pi);
console.log(typeof negative);
console.log(typeof hexa);

let decimal = 43;
let binary = 0b1010;
let octal = 0o52;
let hex = 0x2A;

console.log("Decimal:" , decimal);
console.log("Binary:", binary);
console.log("Octal:" , octal);
console.log("Hex:", hex);
console.log("Multiple:", binary+hex);

let float = 2.13;
let float1 = -0.5;
let float2 = .5; //valid, but avoid for readability
let float3 = 5.; //valid, but avoid for readability

console.log("float:" , float);
console.log("float1:", float1);
console.log("float2:" , float2);
console.log("float3:", float3);

let exp = 1.5e3; // exponential notation
let exp1 = 1.5e-3;
let exp2 = 2E10;

console.log("exp:" , exp);
console.log("exp1:", exp1);
console.log("exp2:" , exp2);

let million = 1_000_000; // numeric separation
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

console.log("million:" , million);
console.log("binarySep:", binarySep);
console.log("hexSep:" , hexSep);


//String Literals

let name = "Saurabh";
let name1 = 'Gulati';

console.log(typeof name);
console.log(typeof name1);

//Boolean Literals

let isStudent = true;

console.log(typeof isStudent);


// Null Literals

let isNull = null; // A variable exists. Null means no value. Zero means value. Type of null is Object. Developer explicitly given no value or empty. It means absence of a value.
let undefined; // A variable exists. Undefined doesn't have the value. Undefined means no barbage value. Javascript itself sets it automatically. Declared but not assigned.

console.log(typeof isNull);
console.log(typeof undefined); // Undefined is not a literal in JS.

console.log(isNull);
console.log(undefined);

function news()
{
    //no return statement
}
console.log(news()); // return undefined.

let x;
x = 90;
console.log(x); // value will be returned as 90.

// null == undefined : true (fake equal to).
// null === undefined : false (Real equal to).

//Big Integer Literals

let big = 123456789012345678901234567890n; // Put n if entering the value manually.
let big2 = BigInt ("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("big:" , big);
console.log("big1:", big2);
console.log("bigFromNum:" , bigFromNum);
console.log(typeof bigFromNum); // bigint

//Special Value Literals


console.log("1/0 :", 1/0); // Infinity
console.log("-1/0 :" , -1/0);
console.log(typeof Infinity); // Number

console.log("0/0 :", 0/0); // NaN
console.log("'hello' * 2:" , 'hello' * 2);
console.log(typeof NaN); // Number





//Object Literals

// Array Literals

console.log([1,,3,].length); // Count no. of commas. 3

//Regular Expression Literals

