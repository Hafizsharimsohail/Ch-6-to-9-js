// The chapter 6 is start??????
//Q:1
{
let a = 10;
document.write("<h2>Results:</h2>");
document.write("The value of a is:" + a);
let number = ++a;
document.write("<br />" + "<br />" +"The value of ++a is: " + number);
document.write("<br />" +"Now the value of a is:" + number);
let number1 = a++;
document.write("<br />" +"<br />" +"The value of a++ is:"+ number1 );
document.write("<br />" +"Now the value of a is:" + a);
let number2 = --a;
document.write("<br />" +"<br />" +"The value of --a is:" + number2);
document.write("<br />" +"Now the value of a is:" + a);
let number3 = a--;
document.write("<br />" +"<br />" + "The value of a-- is:" + number3);
document.write("<br />" +"Now the value of a is:" + a);
}
//Q:2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br />" + "<br />" + "a is " + a + "<br>");      
document.write("b is " + b + "<br>");      
document.write("result is " + result + "<br>");  
//Q:3
let name = prompt("Please enter your name:");
document.write("<br />" +"Hello, " + name + "! Welcome to the website.");
//Q:4
   // Prompt the user to enter a number
    var number = prompt("Please enter a number (leave blank for default 5):");

    // If no number is entered, use 5 as default
    if (number === "") {
        number = 9;
    } else {
        number = parseInt(number); // Convert input to integer
    }

    // Display the multiplication table using document.write
    document.write("<h2>Multiplication Table of " + number + ":</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
//Q:5
// a) Take three subjects name from user and store in variables
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// b) Total marks for each subject is 100
var totalMarksEach = 100;

// c) Take obtained marks for the first subject from user
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// d) Take obtained marks for the remaining two subjects
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// e) Calculate total obtained marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMaxMarks = totalMarksEach * 3;
var percentage = (totalObtainedMarks / totalMaxMarks) * 100;

// Display results in a table format using document.write
document.write("<h2>Marks and Percentage</h2>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMaxMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");