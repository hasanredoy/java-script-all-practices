const shopping = [
  {name: 'shirt', Price : 200, Quantity: 2 },
  {name: 'pant', Price : 1000 ,Quantity: 4},
  {name: 'jacket', Price : 1000 , Quantity: 2},
  {name: 'shoe', Price : 3200, Quantity: 5}
]

let totall = total(shopping);

function total(number){
  let sum = 0;
  for(const loop of number){
    const thisProductPrice = loop.Price * loop.Quantity;
    sum = sum + thisProductPrice ;
    
  }
  return sum;
}

console.log('total is ' ,totall)