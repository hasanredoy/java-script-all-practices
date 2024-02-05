function wood (chair, table, bed){
  const chairWood = 3;
  const tableWood = 10;
  const bedWood = 50;
  
  const totalChairWood =chairWood*chair;

  const totalTableWood =tableWood*table;

  const totalBedWood =bedWood*bed;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;

  return totalWood;
}

const woodINeed = wood(4,2,3);

console.log(`you're final wood is :` , woodINeed)

// for clots

function clots (shirt, pant, shoe){
  const shirtPrice = 300;
  const pantPrice = 1000;
  const shoePrice = 500;
  
  const totalShirtPrice =shirtPrice * shirt;

  const totalPantPrice =pantPrice * pant;

  const totalShoePrice =shoePrice * shoe;

  const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

  return totalPrice;
}

const marketing = clots(4,2,3);

console.log(`You're bill is: `, marketing ,'tk')