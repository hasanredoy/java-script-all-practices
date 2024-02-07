// finding the longest word
function longest(word){
  let slice = word.split(' ');
  let heights = slice.length;
  for(let i=0; i<slice.length ; i++){
    if(slice[i].length > heights){
      heights = slice[i];
    }
  // console.log(i)
  }
  return heights;
 
}

// let the ='hello hi how are you peoples howwwwwu a'
let te ='hello how are you peoples function a functionnn'

console.log(longest(te))