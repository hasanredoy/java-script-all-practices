/*
** ekta array ke function er modde dia loop kore sum ber korte ki  - jinish lagbe

* 1. declare a function 
* 2. set a parameter 
* 3. check the parameter is passed properly
* 4.
*/

function yyy (jjj){
  let sum = 0;
  console.log(jjj)
  for(const numb of jjj){
    sum = sum + numb;
    console.log(numb)
  }
  return sum;
}
let nums= [8, 3, 9, 2];

let myArray = yyy(nums);

 console.log(myArray)