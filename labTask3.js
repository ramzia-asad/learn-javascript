document.write('<br>Print even number in an array: ')

var arr = [1,2,3,3,4,4,6,7,8,9,9]
let evenNo = []
for (let i=0; i<=arr.length; i++) {
    if (arr[i] === 0 || arr[i] % 2 === 0) {
            evenNo.push(arr[i])
    }}
console.log(evenNo)
document.write(evenNo)
//   ************************

// document.write('<br>Delete all occurence of an element: ')
// rem = parseInt(prompt('Enter a number to remove from array'))
// for (let i=arr.length; i>0; i--) {
//     if(arr[i]===rem){
//     arr.splice(arr.indexOf(rem),1)}
// }
// console.log(arr)
// document.write('<br>Removed :',arr)
//   ************************


document.write('<br>Print a pattern: ')

let star = parseInt(prompt('Enter a number to make star: '))
let string = "";
  for (let i = 1; i <= star; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }

console.log(string)
document.write(string)

//   ************************
document.write('<br>Find num of digits in number: ')
let number = 987456321
let numLength = number.toString().length
console.log(numLength)
document.write(numLength)
//   ************************

document.write('<br>Find sum of digits in number: ');
let sum = 0;
while(number){
    sum += number%10
    number = Math.floor(number / 10);
}
console.log(sum)
document.write(sum)

//   ************************
