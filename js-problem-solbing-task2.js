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

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

 function average (phone){
  let average =0;
  let total=0;
  for(const loop of phone){

    total = total + loop.price;
      average =total / phone.length;
  }
  return parseInt(average);
 }   

//  console.log("you're average is ",average(phones), 'tk')

// `Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.`

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

function totalSalary(employee){
  let salary =0;
  let total =0;
  for(const loop of employee){
    salary = loop.experience * loop.increment + loop.starting;
    total = salary + total;
  }

  return total;
}

console.log('Total salary company have to a month is ',totalSalary(employees))