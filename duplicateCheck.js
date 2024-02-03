let array = [10, 0, 21, 10, 0, 25, 21]
let push = duplicateCheck(array)
function duplicateCheck(array){
  let newArray =[];
  for (const numbs of array){
    if(newArray.includes(numbs ) === false){
      newArray.push(numbs)
    }
  }
  return newArray
}

console.log(push)