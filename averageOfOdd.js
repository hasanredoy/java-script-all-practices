
function make_avg(task3){
    //  console.log(task3.length)
    //  console.log(task3)
     let odd =[];
     for(const average of task3){
          // sum = sum +average / 3;
          if(average % 2 === 1){
            odd.push(average)
          }
     }
     let sum =0;
    
    for(const avarege of odd){
      sum = sum + avarege; 
    }
    
   return sum /odd.length;
}

let task =[41, 54, 65, 99]

let print = make_avg(task)
// console.log(print)
console.log( 'avarege is' , print)