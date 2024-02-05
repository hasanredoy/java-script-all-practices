const shopping = [
  {name: 'shirt', Price : 200},
  {name: 'pant', Price : 1000},
  {name: 'jacket', Price : 1000},
  {name: 'shoe', Price : 3200}
]

let totall = total(shopping);

function total(number){
  let sum = 0;
  for(const loop of number){
    sum = sum + loop.Price;
    
  }
  return sum;
}

console.log('total is ' ,totall)
