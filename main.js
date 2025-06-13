//For Loop Questions

//Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


//Write a for loop that prints numbers from 10 to 1 (reverse).
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


//Write a for loop that calculates the sum of numbers from 1 to 100. ➤ Example: 1 + 2 + 3 + ... + 100
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("Sum is:", total);


//Write a for loop that prints all numbers that are multiples of 5 (from 5 to 50). ➤ Output: 5 10 15 20 25 30 35 40 45 50
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}


//Write a for loop that prints the square of numbers from 1 to 10. ➤ Output: 1 4 9 16 25 36 49 64 81 100
 for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
