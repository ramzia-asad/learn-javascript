// 10 Sep 2022      
document.write('Area of Triangle: ')
var a = 2; 
var b = 3; 
var c = 4; 
var semi = (a + b + c)/2;
var area =  Math.sqrt(semi*((semi-a)*(semi-b)*(semi-c)));
console.log(area);
document.write(area , '<br>')
document.write('Semi Parameter: ')
document.write(semi, '<br>')
//   ************************

document.write('Leap Year Determination: ')
const year = prompt('Enter a string: ');
function leapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  result = leapYear(year)
  console.log(result);
  document.write(result , '<br>');
//   ************************

document.write('<br>Quadratic Equation: ')
let x = 10; 
let y = 12; 
let z = 15; 
var result1 = (-y - Math.sqrt(Math.pow(y, 2) - (4 * x * z))) / (2 * x);
var result2 = (-y + Math.sqrt(Math.pow(y, 2) - (4 * x * z))) / (2 * x);
quadratic =  result1 + "....." + result2
console.log(quadratic);
document.write(quadratic , '<br>')
//   ************************

document.write('Sorting Numbers: ')
let i = 3
let j = 1
let k = -1
function sort(){
    var min = i
    if (i < j && i < k){
        return min = i
    }
    else if (j < i && j < k){
        return min = j
    }
    else return min = k
}
res = sort()
console.log(res)
document.write(res)

//   ************************


