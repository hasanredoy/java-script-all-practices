function discount(Quantity){
  if(Quantity <= 50){
    const total = Quantity * 100;
    return total;
  }
  else if (Quantity <= 100){
    const total = Quantity * 80;
    return total;
  }
  else{
    const total = Quantity * 70;
    return total;
  }
}

const products = discount(110);
console.log(`you're total is `, products)