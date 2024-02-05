// Task -1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowest (numbers){
  let lowest = numbers[0];
  for(const num of numbers){
    if(num < lowest){
      lowest = num;
    }
  }
  return lowest;
}

// console.log(lowest(heights2))

// Task -2:
// Find the friend with the smallest name.
const heights = ['rahim', 'robin','r', 'ron', 'rashed'];

function fewestWords(name){
  let smallest = name[0].length;
  for(const words of name){
    if(words.length < smallest){
      smallest= words;
    }
  }
  return smallest;
}

// console.log(fewestWords(heights))


// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function calculateElectronicsBudget(budget){
  let total = 0;
  for(const num of budget){
    let all = num.price;
    total = total + all;
  }
  return total
}

let prices = [
  {name:"laptop", price:35000},
  {name:"tablet", price:15000},
  {name:"mobile", price:20000}
]

// console.log(calculateElectronicsBudget(prices))