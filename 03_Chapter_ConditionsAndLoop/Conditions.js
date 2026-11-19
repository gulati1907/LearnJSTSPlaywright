//Conditions

//If and Else.
// Uses when Ranges, complex logic or multiple condition.

let age = 16;
if (age > 18) {
    console.log("Travel");
} else {
    console.log("No Travel");
} // No travel.


//Nested if
let age1 = 27;
if (age1 > 18) {
    console.log("Travel");
    if (age1 > 26) {
        console.log("Travel Alone")
    }
    else {
        console.log("Travel with Parents")
    }
} else {
    console.log("No Travel");
} // Travel, Travel Alone


// Switch statement
//Evaluates an expression once and then compares it against multiple case values. When one values need to be compare with multiple conditions.
// Uses strict comparison (===).
// Strict equality catches type bugs.
// If break isn't added in switch statement, it will execute all subsequent test cases unitl it breaks or switch ends.

let day = 2;
switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        let a = 10;
        let b = 11;
        console.log(a + b);
        break;

    case 3:
        console.log("Wed");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Sat");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Incorrect Data")
} // Tuesday , 21.

let day1 = 2;
switch (day1) {

    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wed");


    case 4:
        console.log("Thursday");


    case 5:
        console.log("Friday");


    case 6:
        console.log("Sat");


    case 7:
        console.log("Sunday");

    default:
        console.log("Incorrect Data")
} // All data will be printed from Tuesday to default as there is no break added.

let responseCode = 404;
switch (responseCode) {
    case 200:
        console.log("200 OK");
        break;

    case 404:
        console.log("404 Not found");
        break;

    default:
        console.log("Invalid Response Code");

} // 404 not found.

// Switch Grouping.

let browser = "Chrome";
switch (browser) {
    case "Edge":
    case "Chrome":
    case "Brave":
        console.log("Chromium Project");
        break;

    case "Firefox":
        console.log("Mozilla Project");
        break;

    case "Safari":
        console.log("Apple Project");
        break;

    default:
        console.log("Invalid Browser");
} // Chromium Project

let testScore = 85;
switch (true) {

    case (testScore >= 95):
        console.log("Excellent");
        break;

    case (testScore >= 85):
        console.log("Great");
        break;

    case (testScore >= 75):
        console.log("Good");
        break;

    default:
        console.log("Improve");

} // Here, code is matching true is Switch: Great

let val = 1;
switch(val){
    case 1:
        let b1 = 1;
        console.log(b1);
        break;

        case 1:
            let b2 = 2;
            console.log(b2);
            break;

            default:
                console.log("d");
} // 1. Here it will ignore second case 1.

let statusNew = 0;
console.log(typeof statusNew);
switch (statusNew) {
    case false :
        console.log("False matched");
        break;

    case 0:
        console.log("0 matched");
        break;

    default:
        console.log("Nothing Matched");
} // It is an example of Strict comparison. (0 === 0) . Result is 0 matched.

