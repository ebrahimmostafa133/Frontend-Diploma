/*


// (1)
// let num1 = prompt("Enter a number:");
// console.log(num1);

// -----------------------------------------
// (2)
// let num2 = prompt("Enter a number:");
// if (num2 % 3 == 0 && num2 % 4 == 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
// -----------------------------------------
// (3)
// let a = prompt("Enter first number:");
// let b = prompt("Enter second number:");
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }
// -----------------------------------------
// (4)
// let num4 = prompt("Enter a number:");
// if (num4 >= 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }
// -----------------------------------------
// (5)
// let x = prompt("Enter first number:");
// let y = prompt("Enter second number:");
// let z = prompt("Enter third number:");
// let max = x;
// let min = x;

// if (y > max) {
//     max = y;
// }
// if (z > max) {
//     max = z;
// }

// if (y < min) {
//     min = y;
// }
// if (z < min) {
//     min = z;
// }

// console.log(max + " is the max and " + min + " is the min");
// -----------------------------------------
// (6)
// let num6 = prompt("Enter a number:");
// if (num6 % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }
// -----------------------------------------
// (7)
// let ch = prompt("Enter a character:");
// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
//     ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }
// -----------------------------------------
// (8)
// let limit = prompt("Enter a number:");
// let i = 1;
// while (i <= limit) {
//     console.log(i);
//     i = i + 1;
// }
// -----------------------------------------
// (9)
// let n = prompt("Enter a number:");
// let i = 1;
// while (i <= 12) {
//     console.log(n * i);
//     i = i + 1;
// }
// -----------------------------------------
// (10)
// let end = prompt("Enter a number:");
// let i = 1;
// while (i <= end) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i = i + 1;
// }
// -----------------------------------------
// (11)
// let base = prompt("Enter base number:");
// let power = prompt("Enter power number:");
// let result = 1;
// let i = 1;

// while (i <= power) {
//     result = result * base;
//     i = i + 1;
// }
// console.log(result);
// -----------------------------------------
// (12)
// let m1 = prompt("Enter mark 1:");
// let m2 = prompt("Enter mark 2:");
// let m3 = prompt("Enter mark 3:");
// let m4 = prompt("Enter mark 4:");
// let m5 = prompt("Enter mark 5:");

// let total = (+m1) + (+m2) + (+m3) + (+m4) + (+m5);
// let avg = total / 5;
// let percentage = avg;

// console.log("Total: " + total);
// console.log("Average: " + avg);
// console.log("Percentage: " + percentage + "%");
// -----------------------------------------
// (13)
// let month = prompt("Enter month number:");
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     console.log("31 days");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("30 days");
// } else if (month == 2) {
//     console.log("28 or 29 days");
// } else {
//     console.log("Invalid month");
// }
// -----------------------------------------
// (14)
// let i = 1;

// while (i <= 5) {
//     let mark = +prompt("Enter mark #" + i + ":");
//     let grade = "";

//     // Determine grade using if conditions
//     if (mark >= 90 && mark <= 100) {
//         grade = "A";
//     } else if (mark >= 80 && mark < 90) {
//         grade = "B";
//     } else if (mark >= 70 && mark < 80) {
//         grade = "C";
//     } else if (mark >= 50 && mark < 70) {
//         grade = "D";
//     } else if (mark < 50 && mark >= 0) {
//         grade = "F";
//     } else {
//         grade = "Invalid";
//     }

//     // Print result
//     console.log("Enter mark #" + i + ": " + grade + " and " + mark + "%");

//     i = i + 1;
// }
// -----------------------------------------
// (15)
// let month = prompt("Enter month number:");

// switch (month) {
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//         console.log("31 days");
//         break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         console.log("30 days");
//         break;
//     case "2":
//         console.log("28 or 29 days");
//         break;
//     default:
//         console.log("Invalid month number");
// }
// -----------------------------------------
// (16)
// let ch = prompt("Enter a character:");

// switch (ch) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }
// -----------------------------------------
// (17)
// let a = +prompt("Enter first number:");
// let b = +prompt("Enter second number:");

// switch (true) {
//     case (a > b):
//         console.log(a + " is the max");
//         break;
//     default:
//         console.log(b + " is the max");
// }
// -----------------------------------------
// (18)
// let num = +prompt("Enter a number:");

// switch (num % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     default:
//         console.log("Odd");
// }
// -----------------------------------------
// (19)
// let n = +prompt("Enter a number:");

// switch (true) {
//     case (n > 0):
//         console.log("Positive");
//         break;
//     case (n < 0):
//         console.log("Negative");
//         break;
//     default:
//         console.log("Zero");
// }
// -----------------------------------------
// (20)
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let op = prompt("Enter operator (+, -, *, /):");

// switch (op) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num2 != 0 ? (num1 / num2) : "Cannot divide by zero");
//         break;
//     default:
//         console.log("Invalid operator");
// }
// -----------------------------------------



*/
