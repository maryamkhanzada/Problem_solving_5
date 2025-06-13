 //Problem Solving Exercise 2

//Q1. Variables - Sum Two Numbers Problem: Create two variables a and b. Set a = 5 and b = 10. Print the sum of a and b.

let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum is:", sum); 

//Functions - Add Two Numbers Problem: Create a function addNumbers(x, y) that returns the sum of two numbers.

function addNumbers(x, y) {
  return x + y;
}

console.log(addNumbers(5, 10));

//Arrays - Access Second Item Problem: Create an array named fruits containing "apple", "banana", and "mango". Print the second item from the array.
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // Output: banana

//Loops - Print 1 to 5 Problem: Use a for loop to print numbers from 1 to 5.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//5.Conditions - Check Positive or Negative Problem: Create a function isPositive(num) that prints "Positive" if the number is greater than 0, otherwise prints "Negative".

function isPositive(num) {
  if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

isPositive(3);  
isPositive(-2);

//6.Reverse a String Problem: Write a function reverseString(str) that returns the reverse of the given string.
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
