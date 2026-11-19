// Ordered coolection of values. Zero indexed.
//JS arrays are dynamic and can have mixed values.
//type[] is object. user Array.isArray() to check.

const browser = ["Chrome", "Firefox", "Safari"]
console.log(browser[0]); // Index of values: 0,1,2
console.log(browser.at(-1)); // at is fiunction. using this we can check the negative value. Index of values in negative -3,-2,-
console.log(browser.at(0)); // Chrome
console.log(browser.length);
console.log(browser[-1]); // undefine. Square bracket doesn't support negative index.


let fruits = [];
console.log(typeof fruits); // Object

let arr = [10,20,30,40]
console.log(arr.length); // 4
console.log(arr[4]); // undefined. As 4 index doesn't exists.
console.log(arr.at(3)); // 40
console.log(arr.at(4)); // undefined

let score = new Array(3); // This will create an empty array.
score[0] = 1;

let test = Array.of(10,20,30,40);
console.log(test.length); // 4

let test1 = Array.from("hello") // For char array. we can pass like this also. Using the From.

let status = ["pass", "Skip", "Fail"];
console.log(status[0]); // pass
status[2] = "Failed" // Here we are modifying the value.
console.log (status); // 'pass', 'Skip', 'Failed'


let newArray = [1,2,3];
console.log(newArray.length); // 3
newArray.push(4); // Push is used to add a new value at the end of the array.
console.log(newArray);
newArray.push(5,6);
console.log(newArray);
newArray.pop(); // Pop is used to remove the value from last of array. If array is empty it will return undefined.
console.log(newArray);
newArray.unshift(0); // Unshift is used to add a new value at the begining of the array.
console.log(newArray);
newArray.shift(); // Shift is used to add a remove value at the begining of the array. If array is empty it will return undefined.
console.log(newArray);

let sg = [1,2,3,4,5];
sg.splice(2,0,99); // Splice will first check the index no. Here is 2. And the count of values to be deleted starting from that index. here count of values to be deleted is 1.
console.log(sg); // [ 1, 2, 4, 5 ]
// on passing only index no. then splice will delete all the values starting from that index. It will negative value for index also.

let gulati = [1,2,3,4,5];
gulati.splice(2,1, 99); 
console.log(gulati); // Element at 2 index has been deleted. 99 value has been updated. [ 1, 2, 99, 4, 5 ]

let sg1 = [1,2,3,4,5];
sg1.splice(2,0, 99); 
console.log(sg1); // 99 value has been added at 2nd index. [ 1, 2, 99, 3, 4, 5 ] because of 0 count for deletion.

let gulati1 = [1,2,3,4,5];
gulati1.splice(1,2, 99, 91); 
console.log(gulati1); // [1.99,91,4,5]


// Searching in array using indexof
let brow = ["Chrome", "Firefox", "Safari", "Chrome"]
console.log(brow.indexOf("Firefox")); // 1
console.log(brow.indexOf("Fire")); // -1 as it doesn't exists.
console.log(brow.lastIndexOf("Chrome")); // 3

// Includes return boolean value.

console.log(brow.includes("Safari")); // True

// Searching using find
let newArr = [10,20,40,54]
let result = newArr.find(temp => temp > 20); // temp is a temporary variable. Finding a value which is greater than 20.
let index = newArr.findIndex(temp => temp > 20);
let lastIndex = newArr.findLastIndex(temp => temp > 20);
let lastResult = newArr.findLast(temp => temp > 20);
console.log(result); //40
console.log(index); // 2
console.log(lastIndex); // 3
console.log(lastResult); // 54

// Iteration in Array

let printArray = [10,20,40,54];
for (let sa = 0; sa < printArray.length; sa++){
    console.log(sa, printArray[sa]);
}

let printArray1 = [10,20,40,54];
for (let test of printArray1){
    console.log(test);
} // iteration using of operator


let printArray2 = [10,20,40,54];
printArray2.forEach((test1, index) => { // varibale name . forEach((temp varibale, index) => {})
    console.log(test1);
}) // iteration using for each.

// Also we can iterate using In.

 
//Map
let marks = [10,20,50,90,15,91]
let grades = marks.map(i => i > 45 ? "Pass" : "fail"); // using map we are matching each value of array with the condition. Result will be an array. i values are [10,20,50,90,15,91]
console.log(grades); // [ 'fail', 'fail', 'Pass', 'Pass', 'fail', 'Pass' ]
// Map will transform the array into a new array by applying the logic.

//Filter.

let marks1 = [10,20,50,90,15,91]
let grades1 = marks1.filter(s => s >= 45 ); // Using filter , we are filtering the elements.
console.log(grades1); //[ 50, 90, 91 ]






