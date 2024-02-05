const objectt = [
  {phone: 'wlaton', Price : 20000},
  {phone: 'wlaton', Price : 100000},
  {phone: 'wlaton', Price : 10000},
  {phone: 'wlaton', Price : 320000}
]

let compair = min(objectt);

function min(number){
  let min = number[0];
  for(const loop of number){
    if(loop.Price <min.Price){
      min = loop;
    }
  }
  return min;
}

console.log('min number is' ,compair)