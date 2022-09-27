// 9 Sep 2022   
console.log("Lets Get Started")

document.write("Sum of Two Numbers: ")
let a = 10;
let b = 20;
let sum = a+b
console.log(sum);
document.write(sum + "<br>")
//   ************************

document.write("<br>Print Numbers from 1 to 10: <br>")
for (var input = 1; input <= 10; input++) {
    console.log(input);
    document.write(`${input} `)
   }
document.write(`<br>`)
//   ************************

document.write("<br>Odd Numbers Less Than 100: <br>")
for (var i = 1; i < 100; i += 2) {
    document.write(i + " ");
}
//   ************************

document.write("<br><br>Multiplication Table with 7: <br>")
const number = 7;
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
    document.write(`${number} * ${i} = ${result} <br>`);
}
//   ************************

document.write("<br><br>Multiplication Tables from 1 to 10: <br>")
var num = 1;
for(let i = 1; i<=10; i++){
  for(let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`);
    document.write(`${num} * ${i} = ${result} <br>`);
}
num++
document.write('<br>')
}
//   ************************

// document.write("<br><br>Multiplication Table with number 1 to 10: <br>")
// const number1 = parseInt(prompt('Enter an integer between 1 to 10: '));
// if(number1 <= 10){
//     for(let i = 1; i <= 10; i++) {
//     const result = i * number1;
//     console.log(`${number1} * ${i} = ${result}`);
//     document.write(`${number1} * ${i} = ${result} <br>`);
// }
// }
// else 
// {alert('Invalid Number !')
// document.write("Invalid Number Provided")}
//   ************************

document.write("Sum of Numbers from 1 to 10: ")
function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  console.log(numberSum(10))
  document.write('<br>'+numberSum(10))
//   ************************

document.write("<br><br>Celsius to Fahrenheit: ")
function celsiusToFahrenheit(celsius) 
{
  var cToF = (celsius * 1.8) + 32;
  var message = celsius+'°C is ' + cToF + ' °F';
    console.log(message);
    document.write('<br>'+message)
}
celsiusToFahrenheit(60);
//   ************************

document.write("<br><br>Fahrenheit to Celsius: ")
function fahrenheitToCelsius(fahrenheit) 
{
  var fToC = (fahrenheit - 32) / 1.8;
  var message = fahrenheit+'°F is ' + fToC + '°C';
    console.log(message);
    document.write('<br>'+message)
} 
fahrenheitToCelsius(140);
//   ************************

// area = PI * r2
document.write("<br><br>Area of circle with radius 12: ")
function areaOfCircle(radius) 
{
  var area = Math.PI * (radius*radius);
    console.log(area);
    document.write('<br>'+area)
} 
areaOfCircle(12);
//   ************************

document.write("<br><br>Average of Two Numbers: ")
function average(x, y) 
{
  var avg = (x + y)/2;
    console.log(avg);
    document.write('<br>'+avg)
} 
//average(10,20);
enterAvg = parseInt(prompt('Enter 1st num to find average'))
enterAvg2 = parseInt(prompt('Enter 2nd num to find average'))
average(enterAvg,enterAvg2);

//   ************************

document.write("<br><br>Reverse a string: ")
function reverseStr(str) {

    const arrayStr = str.split("");
   
    const reverseArray = arrayStr.reverse();
 
    const joinArray = reverseArray.join("");
    
    return joinArray;
}
 
const string = prompt('Enter a string: ');

const result = reverseStr(string);
console.log(result);
document.write(string + "  =>  " +result);
//   ************************