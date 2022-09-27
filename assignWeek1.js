document.write(`<br> Write a JavaScript function to get the last element of an array.
Passing a parameter 'n' will return the last 'n' elements of the
array: `)
var last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));
                //      *******************************************

document.write(`<br>Write a simple JavaScript program to join all elements of the
following array into a string: `)
  myColor = ["Red", "Green", "White", "Black"];
  console.log(myColor.toString());
  console.log(myColor.join());
  console.log(myColor.join('+'));
                //      *******************************************


  document.write(`<br> Write a JavaScript program which accept a number as input and
  insert dashes (-) between each two even numbers : `)
  const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));

                //      *******************************************
  
  document.write(`<br>Write a JavaScript program to find the most frequent item of an
  array : `)
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

                //      *******************************************

document.write(`<br>Write a JavaScript program to compute the sum and product of an 
  array of integers : `)
  var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 

                //      *******************************************

  document.write(`<br>Write a JavaScript function to find the difference of two arrays : `)
  function differenceOf2Arrays (array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (var i in array1) {
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
    if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
    }
    
    console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
    console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
    
                //      *******************************************

  document.write(`<br>Write a JavaScript program to combine the numbers of a given 
  array into an array containing all combinations : `)
  //#Source https://bit.ly/2neWfJ2 
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

                //      *******************************************

  document.write(`<br>Write a JavaScript program to get a random element from an 
  array (using Math functions) : `)
  function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

                //      *******************************************

  document.write(`<br>Write a JavaScript program to check whether a given array of 
  integers is sorted in ascending order : `)
  function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]))
console.log(is_monotonous([-3, -2, -1]))

                //      *******************************************

  document.write(`<br>Write a JavaScript program to replace the first digit in a string 
  (should contain at least one digit) with a $ character : `)
  function replace_first_digit(input_str) {

    return input_str.replace(/[0-9]/, '$');
  }
  console.log(replace_first_digit("abc1dabc"));
  console.log(replace_first_digit("p3ython"));
  console.log(replace_first_digit("ab1cabc"));   
  
                //      *******************************************

  document.write(`<br> Given an array of integers where all elements occur twice, find 
  unique elements. [1, 2, 2, 4, 3,1 , 3]   : `)
  let nums = [1, 2, 1, 3, 4, 3, 2]
  let uniqueResult = nums[0]; // Start with the first element
  for (i in nums)
    result ^= i;
  console.log(uniqueResult)
                //      *******************************************

  document.write(`<br> Print each vowel of String in order on a new line, then print each 
  consonant in order on a new line : `)
  function vowelsAndConsonants(s) {
    var atom = s.length;
    var i = 0;
    while (i <= atom)
    {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            console.log('\n' + s[i]);
        }
        else {
            console.log('\n' + s);
        }
    }
}
vowelsAndConsonants(qwertyuiop)
                //      *******************************************

  document.write(`<br>Print the second largest value from Array : `)

	function print2largest(arr, arr_size) {
		let i, first, second;

		if (arr_size < 2) {
			document.write(" Invalid Input ");
			return;
		}
		arr.sort();
		for (i = arr_size - 2; i >= 0; i--) {
			if (arr[i] != arr[arr_size - 1]) {
				document.write("The second largest element is " + arr[i]);
				return;
			}
		}
		document.write("There is no second largest element<br>");
	}
	let arr= [ 12, 35, 1, 10, 34, 1 ];
	let n = arr.length;
	print2largest(arr, n);

                //      *******************************************

  document.write(`<br> Write printGrade(score) function to print the following output : `)

function printGrade(score){
console.log("Average grade: " + (Avgmarks)/students.length);

        if (35 > score <= 40){
          console.log("Grade : A");      
          }
        else if (30 > score <= 35) {
          console.log("Grade : B"); 
          } 
        else if (25 > score <= 30) {
          console.log("Grade : C"); 
        } else if (20 > score <= 25) {
          console.log("Grade : E"); 
        } else if(0 >= score <= 20) {
          console.log("Grade : F");}
          else{(console.log('Error'))} 
}
console.log(32)
                //      *******************************************

  document.write(`<br> Write getLetter(string) function to print the following output : `)
  function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = 1;
            break;

        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 2;
            break;

        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 3;
            break;

        case ('v' || 'w' || 'x' || 'y' || 'z'):
            letter = 4;
    }
    return letter;
}
console.log(getLetter('hello World'))
                //      *******************************************

  document.write(`<br>Write a function that has one array as a parameter. It must iterate 
  through an array and perform the following action on each element : `)

var eveOddArr = []
  function evenOdd(addMul){
    for (var i = 0; i<arr1.length; i++)
    {
            if (addMul[i]%2 == 0){
              addMul[i]*2;
              eveOddArr.push()
            }
            else
            {
              addMul[i]*3;
              eveOddArr.push()
            }
    }
  }
  console.log(evenOdd([2,8,3,4,6,7,5,1]))
                //      *******************************************

  document.write(`<br> Create a simple calculator : `)
let calResult;

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${calResult}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${calResult}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${calResult}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${calResult}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
                //      *******************************************

  document.write(`<br>Print the maximum and minimum values from an array : `)
  const myArray = [20, 23, 27];

let minElement = myArray[0];
for (let i = 1; i < arrayLength; ++i) {
    if (myArray[i] < minElement) {
        minElement = myArray[i];
    }
}

let maxElement = myArray[0];
for (let i = 1; i < arrayLength; ++i) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
    }
}

console.log(minElement);
console.log(maxElement);

                //      *******************************************

  document.write(`<br>Push an element in mid of an array : `)
const arr2 = ['a', 'b', 'd'];

let start = arr2.length;
let deleteCount = 0;
arr2.splice(start, deleteCount, 'c');

console.log(arr2)
                //      *******************************************

  document.write(`<br> Calculate the ratio of an element that are positive, negative, and zero in
  an array. Print the result on a new line with 4 places after decimal : `)
function positiveNegativeZero(arr)
{
		let len = arr.length;
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;

	for(let i = 0; i < len; i++)
	{
		if (arr[i] > 0)
		{
			positiveCount++;
		}
		else if (arr[i] < 0)
		{
			negativeCount++;
		}
		else if (arr[i] == 0)
		{
			zeroCount++;
		}
	}
	document.write((positiveCount / len).toFixed(4) + " ");
	document.write((negativeCount / len).toFixed(4) + " ");
	document.write((zeroCount / len).toFixed(4));
	document.write("<br>");
}
let a1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a1);

let a2 = [ 4, 0, -2, -9, -7, 1 ];
positiveNegativeZero(a2);

                //      *******************************************
