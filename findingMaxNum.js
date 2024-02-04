const a = 35;
const b = 55;
const c = 66;
const d = 95;

if(a > b && a > c && a> d){
  console.log('a win')
}
else if(b > a && b > c && b > d){
  console.log('b win')
}
else if(c > b && c > a && c > d){
  console.log('c win')
}
else{
  console.log('d win')
}

function max (a, b, c, d){
  if(a > b && a > c && a> d){
  console.log('a win')
}
else if(b > a && b > c && b > d){
  console.log('b win')
}
else if(c > b && c > a && c > d){
  console.log('c win')
}
else{
  console.log('d win')
}

}

let n = 50;
let m = 60;
let o = 50;
let p = 20;

let numbers= max(n, m, o, p)


// by using math.max 

let bigger = Math.max(40, 60, 80, 90, 100);

console.log('max number is', bigger)

