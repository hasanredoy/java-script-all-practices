// max Number 

function max (number){
  let maxNum = number[0];
  for(const loop of number){
    if(loop > maxNum){
      maxNum = loop;
    }
  }
  return maxNum;
}

let nums = [20, 25, 40, 60 ,80,90,100]

let numb = max(nums);
console.log('maximum number is ' ,numb)


let numbs = min(nums);

function min(number){
  let min = number[0];
  for(const loop of number){
    if(loop<min){
      min = loop;
    }
  }
  return min;
}

console.log('min number is' ,numbs)