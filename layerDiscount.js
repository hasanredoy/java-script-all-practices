function discount(Quantity){

  const oneTo100 =100;
  const from100to200 =90;
  const up200 =200;
  if(Quantity <= 100){
    const total = Quantity * 100;
    return total;
  }
  else if (Quantity <= 200){
    const frist100total = 100 * oneTo100;
    const remainingItems = Quantity - 100;
    const remainingPrice = remainingItems * from100to200;
    const total = frist100total + remainingPrice;
    return total;
  }
  else{
   const frist100total = 100 * oneTo100;
   const second100total = 100 * from100to200
    const remainingItems = Quantity - 200;
    const remainingPrice = remainingItems * up200;
    const total = frist100total + second100total + remainingPrice;
    return total;
  }
}


const products = discount(210);
console.log(`you're total is `, products ,Array.length)

console.log(typeof null)