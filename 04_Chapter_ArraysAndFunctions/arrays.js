// Ordered coolection of values. Zero indexed.
//JS arrays are dynamic and can have mixed values.
//type[] is object. user Array.isArray() to check.
//Arrays are mutable in nature. If you assign the array to a new array. Any change in new array also gets reflected in original array.

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

// Sorting
let sortFruits = ["banana", "strawberry", "apple", "mango"];
console.log(sortFruits); // [ 'banana', 'strawberry', 'apple', 'mango' ]
sortFruits.sort();
console.log(sortFruits); // [ 'apple', 'banana', 'mango', 'strawberry' ]

let newMark =[4,3,2]
newMark.sort();
console.log(newMark); // [ 2, 3, 4 ]

let nums = [10, 1 , 21, 2];
nums.sort();
console.log(nums); // [ 1, 10, 2, 21 ]. This is called natural sorting or lexicographic sorting or by default it will use the first character. Dictonary order.

let actualSort = [10, 1 , 21, 2];
actualSort.sort((a,b) => a-b); // until a-b becomes +ve.
console.log(actualSort); // [ 1, 2, 10, 21 ]
actualSort.sort((a,b) => b-a); // reverse sorting
console.log(actualSort); // [ 21, 10, 2, 1 ]

let fruits1 = ["banana", "strawberry", "apple", "mango"];
console.log(fruits1); // [ 'banana', 'strawberry', 'apple', 'mango' ]
fruits1.sort((a,b) => a.localeCompare(b)); // use local compare in case of string to get actual sort.
console.log(fruits1); // [ 'apple', 'banana', 'mango', 'strawberry' ]

//Slice.
//Slice (start,end) : returns new array.
// It uses the index. (start,end-1)


let mine = [1,2,3,4,5];
console.log(mine.slice(1,3)); // [ 2, 3 ]. Here it start from index 1 which is value 2. in the end parameter, passed value is 3 but actually it becomes 3-1: 2. Array will be created from index 1 to index 2.
console.log(mine); // [ 1, 2, 3, 4, 5 ]
console.log(mine.slice(2)); //[ 3, 4, 5 ] As no edn paramter has been passed. It will slice all values from index 2.
console.log(mine.slice(-2)); // [ 4, 5 ]
console.log(mine.slice(0)); // every element will come.
console.log(mine.slice(-5)); // every element will come.
console.log(mine.slice(-3,-5)); // empty array []. Direction is wrong to get the elements. Move only left to right.

// Concat or Combining.
let v = [1,2];
let v1 = [3,4];
let v2 = v.concat(v1);
console.log(v2); // [ 1, 2, 3, 4 ]
 
let v3 = [...v,...v1]; // ... (Triple dot is called Spread. Modern way of concat. pass the value in array.)
console.log(v3); // [ 1, 2, 3, 4 ]

// Checking an Array.

let s = [1,2];
let s1 = [3,4];
let s2 = "a";
let s3 = [];
console.log(Array.isArray(s)); // True
console.log(Array.isArray(s1)); // True
console.log(Array.isArray(s2)); // False
console.log(Array.isArray(s3)); // True

// Every. It return boolean. All elements should pass the condition.
let m1 = [10,20,50,90,15,91]
let g1 = m1.every(s => s >= 45 );
console.log(g1); //false



let m2 = [10,20,50,90,15,91]
let g2 = m2.some(s => s >= 45 ); // Some of the elements should be true.
console.log(g2); // true

//Deconstructing of an Array.

let [first, second, third] = [1,2,3];
console.log(first); //1
console.log(second); //2
console.log(third); //3

let [first1, second1, ...rest] = [1,2,3,4,5];
console.log(first1); //1
console.log(second1); //2
console.log(...rest); //3,4,5

let [, , thirdOnly] = [1,2,3];
console.log(thirdOnly); //3

let swap = 1;
let swap1 = 2;
[swap, swap1] = [swap1, swap];
console.log(swap,swap1); // 2,1 Swapping

