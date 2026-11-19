// To do a tasks multiple times.
// For: When you know how many times to iterate.
// While: When Iteration depends upon condition not count. While will always check for condition first.  Entry and Exit loop.
// do while: when the action must run at least once before the condition is checked.


// For Loop.
// ICU: init (let i =0), condition: (i < 10), updation.
// Increment and Decrement has not effect on for loops.


for (let i=0 ; i<10 ; i++)
{
    console.log(i)
} // Print 0 to 9.

for (let p=1 ; p<=10 ; p++)
{
    console.log(p)
} // Print 1 to 10.

for (let _1=0 ; _1<=10 ; _1++)
{
    console.log(_1)
} // Print 0 to 10. This is a valid syntax.

for (let saurabh=0 ; saurabh>1 ; saurabh++)
{
    console.log(saurabh)
} // no puput in this case.

for (let saurabh1=0 ;  ; saurabh1++)
{
    console.log(saurabh1)
} // This will go infinite.

for (let me = 0; me < 18; me++) {
    if (me > 15) {
        console.log("Get gift");
    } else {
        console.log("No gift")
    }
}

let count = 0;
for (let m = 5; m < 5 ; m++){
    count++;
}
console.log(count); //0

// While loop.

let attempt = 0; // init
while (attempt < 3){ // condition
console.log(attempt);
attempt++; // updation
} // Print 0 to 2.

let gov = 1;
while (gov <=15){
    console.log("This will work for till 15 years")
    gov++;
} // Print the same line 15 times.

let age = 7;
while (true){
    if (age > 10){
        break; // break is used to put you out of the loop
    } else {
        console.log(age);
    }
    age++;
} // 7 to 10. because 10 > 10 is not true. We are checking strict comparison.

let u = 0;
while (u < 5){
    u++;
} console.log(u); // 5. While loop has been exited at value 5. No value has been printed when in while loop[.]

// Do while 
// It will always execute at least once.
// Retry condition exmaple.

let retry = 0;
do {
    console.log("Retry", retry);
        retry++;
} while (retry < 3); // Retry 0 to Retry 2.

