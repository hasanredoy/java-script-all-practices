// function oddEvens(evenss){
//   let even= []; 
//   for(const nums of evenss){
    
//     if(nums % 2 === 0){
//       console.log(nums)
//       even.push(nums)
//     }
//   }
//   return even;
// }

let myArray = [37, 2 , 4, 1, 3, 5, 6]
// let even = oddEvens(myArray)
// console.log(even)
// console.log('------------------------')

// function oddEvens (odds){
//   let os=[];
//   for(const nums of odds){
//     if(nums % 2 === 1){
//       // console.log(nums)
//       os.push(nums)
//     }
//   }
//   return os;
// }

// let odd = oddEvens(myArray);
// console.log(odd)

console.log('------------------------')
// sum of odds
function oddEvens (odds){
  let sum=0;
  for(const nums of odds){
    if(nums % 2 === 1){
      // console.log(nums)
      sum= sum + nums;
    }
  }
  return sum;
}

let odd = oddEvens(myArray);

console.log(odd)