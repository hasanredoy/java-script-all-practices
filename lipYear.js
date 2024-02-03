// function lipYear (year){
//   if(year % 4 === 0){
//     return "it's a leap Year"
//   }
//   return "it isn't a leap Year"
// }
function lipYear (year){
  if(year% 100 !== 0 &&year % 4 === 0 ){
    return "it's a leap Year"
  }else if(year % 400 === 0){
    return "it's a leap Year"
  }
  return "it isn't a leap Year"
}
let year = 2024;

let YearLip = lipYear(year);

console.log(YearLip)

