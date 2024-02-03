// task 1

// function task1 (a, b, c, d){
//   return a*b*c*d;
// }

// let task = task1(4, 5, 6, 1)

// console.log(task)

// task 2

// function task2(task){
//   if(task % 2 === 0){
//     return task / 2 +' '+ `is you're answer`;
//   }else{
//      return task * 2 +' '+ `is you're answer`;
//   }
// }

// let task = task2(14);

// console.log(task)

// task 3

// // Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(task3){
//      console.log(task3.length)
//      console.log(task3)
//      let sum =0;
//      for(const average of task3){
//           sum = sum +average / 3;
//      }
//      return  sum;
// }

// let task =[41, 54, 65]

// let print = make_avg(task)

// console.log( 'avarege is' + print)

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(task4) {
//   let sum = 0;
//   for(const binary of task4){
//     console.log(binary)
//     if(binary===0){
//       sum = sum + 1
//     }
//   }
//  return sum;
// }

// let binary =[1, 0, 0, 1, 0, 1, 0, 1, 0, 0];
// let task = count_zero(binary);

// console.log( "total zeros are ",
// task
// )

// Task-5

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(odd_even){
  let even = "even";
  let odd = "odd";
  if(odd_even % 2 === 0){
    return even;
  }
  else{
    return odd;
  }
}

let xx = odd_even(112);

console.log(xx)