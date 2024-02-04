// Task-1
// Write a function to convert temperature from Celsius to Fahrenheit.

function temperature (Celsius){
  let celsius = Celsius *  9/5 + 32;
  return celsius;
}

let celsius = temperature(32)
// console.log(celsius,"fahrenheit")

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// let  numbers = [5,6,11,12,98, 5];
// let input = Count(numbers)
// function Count(nums){
//   let sum =[]; 
//   for(const numb of nums){
//     if(numb === 5){
//       sum ++
//     }
//   }
//   return sum ;
// }
// console.log(input)

// let  numbers = [5,6,11,12,98, 5];
// let input = Count(numbers)
// function Count(nums){
//   let sum = 0; 
//   for(const numb of nums){
//     if(numb === 25){
//       sum ++
//     }
//   }
//   return sum ;
// }
// console.log(input)

// Task-3:
// Write a function to count the number of vowels in a string.
function countVowels(str) {
  
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      // Check if the character is a vowel
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
          // If it's a vowel, increment the count
          count++;
      }
  }
  
  // Return the total count of vowels found in the string
  return count;
}

// Example usage:
const str =  "a b c d e f g h i j k l m n o p q r s t u v w x y z";
console.log("Number of vowels:", countVowels(str)); // Output: 3


// task 4

function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");
    
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
    
    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Check if the current word's length is greater than the current maximum length
        if (words[i].length > maxLength) {
            // If so, update the longest word and its length
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }
    
    // Return the longest word found
    return longestWord;
}

// Example usage:
const inputString = "I am learning Programming to become a programmer";
console.log("Longest word:", findLongestWord(inputString)); // Output: Programming
