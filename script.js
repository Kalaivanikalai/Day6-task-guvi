
/**************** Task link-1 answers ****************/

// 1. Find the culprit
//  Ans :   We have to use double quotes ("") or single quotes (''). 
            alert( "I'm JavaScript!"); 
// 2. Find the culprit and invoke the alert
alert("I’m invoked!");

 // 3. Explain the below how it works
alert("I'm JavaScript!"); 
 // This function will display text in a dialog box that pops up on the screen.
alert('Hello')
 //  This is all possible because JavaScript does not strictly require semicolons. 
 // When there is a place where a semicolon was needed, it adds it behind the scenes.
alert(`Wor
 ld`)
 //  This function will display text in a dialog box with line-breaks in an alert box.
alert(3 +
1
+ 2); 
// Alert can evaluated values

// 4. Fix the below to alert Guvi geek

fname = "Guvi";
lname = "geek"
admin = fname +' '+ lname;
alert(admin);

// 5.Fix the below to alert hello Guvi geek
 
fname = "Guvi";
lname = "geek"
let name = fname+' '+lname;
alert("hello" +' '+ name);

// 6. Fix the below to alert sum of two numbers

let a = prompt("First number?");
let b = prompt("Second number?");
let result = parseFloat(a) + parseFloat(b);
alert(result);

// 7. Fix the below to alert sum of two numbers

let a = prompt("First number?");
let b = prompt("Second number?");
let result = parseFloat(a) + parseFloat(b);
alert(result);

// 9.How to get the correct score in console.

let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// 10. Fix the code to welcome the Employee
let i = 4;
while (i>1) {
  console.log( --i );
}

/**************** Task link-2 answers ****************/

// 1.Write a code to print the numbers in the array

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 for(var i = 0; i < numsArr. length ; i++){
 new_string += numsArr[i] 
}
console.log(new_string);

// 2. Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for(var i = 0; i < numsArr.length ; i++){
 	new_string += numsArr[i];
    if(i+1 !== numsArr.length){
    	new_string += ",";
    }
}
console.log(new_string);


// 3. output : 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for(var i = numsArr.length-1; i >=0; i--){
 	new_string += numsArr[i];
    if(i !== 0){
    	new_string += " ";
    }
}

console.log(new_string);


// 6. Write a code to add all the numbers in the array

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);

// 7. Write a code to add the even numbers only
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const evennum = (numsArr) => {
var sum=0;
for (var i = 0; i < numsArr.length; i++) {
 if(numsArr[i] % 2 === 0){
 sum += numsArr[i];
 }
  }
  return sum;
}
console.log(evennum(numsArr));

// 8. Write a code to add the even numbers and subract the odd numbers

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i < numsArr.length; i++) {
 if(numsArr[i] % 2 != 0)
 {
 sum -= numsArr[i]
 }
 else{
 sum += numsArr[i]
 }
}
console.log(sum);

// 9. Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) 
{
 console.log(numsArr[i]);
}

// 14.Write a code to add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 
 for(var j = 0 ; j < inner_array.length;j++ )
 {
 if(numsArr[i][j]%2!=0)
 {
 sum_odd += numsArr[i][j]
 }
 else
 {
 sum_even += numsArr[i][j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);


/**************** Task link-3 answers ****************/

// 1.Fix the code to get the largest of three.
aa = (f,s,t) => {

  if(f>s &&f>t)
  {
  console.log(f)
  }
  else if(s>f && s>t)
  {
  console.log(s)
  }
  else{
  console.log(t)
  }
 }
 aa(1,2,3);

//  2. Fix the code to reverse.

(function(str){
  str1 = str.split("").reverse().join(" ");
  console.log(str1); 
 })("abcd")
