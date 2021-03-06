/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 1"); 
const area = function(l1, l2) {
    console.log(l1 * l2);
};
let say = area(5, 2)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 2"); 
const crazySum = function(integer1, integer2) {

    if (integer1 !== integer2) {
        console.log(integer1 + integer2)
    } else {
        console.log((integer1 + integer2) * 3)
    }
}; 
let integers = crazySum(5, 5)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 3"); 
const crazyDiff = function(a, b) {
        let absoluteDifferance =  Math.abs(a - b)
        
        if (absoluteDifferance < 19) {
            console.log("Absolute differance is less than 19 and equals " + absoluteDifferance)
        } else if (absoluteDifferance > 19) {
            console.log("Absolute differance is greater than 19 therefore multiply by 3. The result is " + (absoluteDifferance * 3))
        }
}; 
let difference = crazyDiff(10, 19)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 4"); 
const boundary = function(n) {
    if ( n >= 20 && n <= 100 ) {
            console.log(true)
    } else if ( n === 400) {
        console.log(true)
    }
}

let parameter = boundary(20)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/



/* WRITE YOUR ANSWER HERE */

console.log("Exercise 5"); 
const strivify = function(c) {
    let split = c.split(" ")
    if (split[0] === "Strive") {
        console.log("Strive")
    } else if (split[0] !== "Strive") {
        console.log("Strive" + c) 
    }
}

let sentance = strivify(" is the best")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 6"); 
const check3and7 = function(n) {
    if ( n % 3 === 0 || n % 7 === 0 ) {
            console.log( n + " its multiple of 3 or 7")
    } 
}
let number = check3and7(6)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 7"); 
const reverseString = function(str) {
    let split = str.split("")
    let reverseSplit = split.reverse()
    let join = reverseSplit.join("")
    console.log(join)
}
let stringToPass = reverseString("Strive")


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log("Exercise 8"); 
const upperFirst = function(letter) {
    let toUpper = letter[0].toUpperCase() + letter.substring(1)

    console.log(toUpper)
}
let someWord = upperFirst("abrakadabra")

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log("Exercise 9"); 
const cutString = function(word) {
    let cutIt = word.substring(1).slice(0, -1)
    console.log(cutIt)
}
let anotherWord = cutString("sator")
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/