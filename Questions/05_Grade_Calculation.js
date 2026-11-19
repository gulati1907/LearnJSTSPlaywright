// if .. else if.. if

let score = 35;
if (score > 100 || score < 0) {
    console.log("Invalid score");
} else {
    if (score > 90) {
        console.log("Grade A : Excellent");
    } else if (score > 80 && score <= 90) {
        console.log("Grade B : Very Good");
    } else if (score > 70 && score <= 80) {
        console.log("Grade C : Good");
    } else if (score > 60 && score <= 70) {
        console.log("Grade D : Average");
    } else if (score > 50 && score <= 60) {
        console.log("Grade E : Below Avg");
    } else if (score > 40 && score <= 50) {
        console.log("Grade F : Fail");
    }
    else {
        console.log("Grade G: Below Fail");
    }
}
