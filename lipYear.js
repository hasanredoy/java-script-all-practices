function lipYear (year){
  if(year % 4 === 0){
    return "it's a leap Year"
  }
  return "it isn't a leap Year"
}

let year = 2000;

let YearLip = lipYear(year);

console.log(YearLip)