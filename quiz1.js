let arr = [40,60,80,20]
let add = arr[0];
let min = arr[0]
let prevAdd = []
let prevMin = []

console.log('Adding Array:')
for(let i = 1; i< arr.length; i++){
    console.log(`${add} + ${arr[i]} = ${add+arr[i]}`)
    add += arr[i]
    prevAdd.push(add)
}
console.log( )
console.log('Subtracting Array:')
for(let i = 1; i< arr.length; i++){
    console.log(`${min} - ${arr[i]} = ${min-arr[i]}`)
    min -= arr[i]
    prevMin.push(min)
}
console.log(add)
console.log(min)



//   ************************



















// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }