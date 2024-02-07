function calculator(num1,num2,operator){
  if(operator === '+'){
     return num1 + num2 ;
  }
  else if(operator === '-'){
     return num1 - num2 ;
  }
  if(operator === '*'){
     return num1 * num2 ;
  }
  if(operator === '/'){
     return num1 / num2 ;
  }
  else{
     return 'please provide a number';
  }
}

console.log('Operation answer is ',calculator(2,5,'*'))