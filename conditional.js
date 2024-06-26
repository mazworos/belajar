// let age = 10

// if (age >=17) {
//     console.log("You can now create an ID Card")
// } else {
//     console.log("You are not old enough to create an ID Card")
// }

let grade ="B"

if (grade == "A") {
    console.log("Excellent Result!!")
} else if (grade == "B") {
    console.log("Great Result!!")
} else if (grade == "C") {
    console.log("Average Result!!")
} else {
    console.log("Invalid grade")
}

switch (grade) {
    case "A":
        console.log("Excellent Result");
        break;
    case "B":
        console.log("Great Result");
        break;
    case "C":
        console.log("Average Result");
        break;
    
        default:
            console.log("Invalid Grade");
        break;
}

// ternary operator 
const str = "JavaScript"
console.log(str == "JavaScript" ? "JavaScript" : "Not Javascript");
