// Fix the code to welcome the Employee
let login = "Employee";
let message;
if (null || login || undefined )
{
  message = "Employee";
}
else
{
 message = "No login";
}
  console.log(message);

// Fix the code to welcome the boss
let message;

if (null || 2 || undefined )
{
 message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);

//   Change the code to print 1 to 10 in 4 lines

var sum = "";
for(var i = 1; i < 11; i += 1) {
  sum += i + " ";
}
console.log(sum);
console.log(sum);
console.log(sum);
console.log(sum);

// Change the code to print even numbers

for(let num=2; num<=20; num++){
    if(num % 2 == 0){
        console. log(num);
    }
}

// Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// Whats the msg printed and why?

var lemein ="0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

// Output :  hi 
// ans: Its a Server error!code might have an INFINITE LOOP or be running for too long.


// Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

for (var i = 0; i < numsArr.length; i++) {
    console.log("Array" + numsArr[i].length,numsArr[i]);
}

// Write a code to print elements in the inner arrays

let numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

for(let i = 0; i < numsArr.length; i++) {
  
  for(let j = 0; j < numsArr[i].length; j++) {
     
      console.log(numsArr[i][j]);
  }
}

// Fix the code to get the largest of three.
let aa = (f,s,t) => {
 
  if(f>s &&f>t){
  console.log(f)}
  else if(s>f && s>t){
  console.log(s)}
  else{
  console.log(t)}
 }
 aa(1,2,3);

//  Fix the code to Sum of all numbers using IIFE function

( ()=>{
  var arr = [9,8,5,6,4,3,2,1];
var sum = 0;

for (var i = 0; i < arr.length; i++){
sum += arr[i];
}
console.log(sum);
return sum;
})
();

// Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
( () =>{
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})
();

// Fix the code to return the Prime numbers

var numArray = [1,3,2,5,10];
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

// Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100];
const sum = num.reduce(function (a, b) {
    return a + b;
});
console.log(sum);

// Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
( () =>{
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})
();

// print all odd numbers in an array using IIFE function

( () => {
  var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]);
      }
    }
  })
();

// Fix the code to remove duplicates.
var arr = ["guvi", "geek", "guvi", "duplicate", "geeK"];
  
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
    console.log(removeDuplicates(arr));



    