// 10 Sep 2022     

document.write('Push:  ')
let pushArray = [1,2,3,4,5,6]
pushRes = pushArray.push(800)
console.log(pushRes, pushArray)
document.write(pushRes,'.....', pushArray, '<br>')
//   ************************

document.write('<br>Pop: ')
let popArray = [1,2,3,4,5,6]
popRes = popArray.pop()
console.log(popRes, popArray)
document.write(popRes,'.....', popArray, '<br>')
//   ************************

document.write('<br>Shift: ')
let shiftArray = [12,28,93,74,25,96]
shiftRes = shiftArray.shift()
console.log(shiftRes, shiftArray)
document.write(shiftRes,'.....', shiftArray, '<br>')
//   ************************

document.write('<br>Unshift: ')
let unshiftArray = [1,2,3,4,5,6]
unshiftRes = unshiftArray.unshift(10)
console.log(unshiftRes, unshiftArray)
document.write(unshiftRes,'.....', unshiftArray, '<br>')
//   ************************

document.write('<br>ForEach: <br>')
function forEachInArray(item,index) {
    console.log(index + ": " + item); 
    document.write(index + ": " + item + '<br>')
}
  let forEachArray = [12,28,93,74,25,96]
  forEachArray.forEach(forEachInArray)
//   ************************

document.write('<br>Filter: ')
let filterArray = [12,28,93,74,25,96]
filterRes = filterArray.filter((i) => i>50 )
console.log(filterRes, filterArray)
document.write(filterRes,'.....', filterArray, '<br>')
//   ************************

document.write('<br>Filter Using Condition: ')
let conFilterArray = [12,28,93,74,25,96]
conFilterRes = conFilterArray.filter((i) => i>50 && i<80 )
console.log(conFilterRes, conFilterArray)
document.write(conFilterRes,'.....', conFilterArray, '<br>')
//   ************************

document.write('<br>Map: ')
let mapArray = [1,2,3,4,5,6,7,8,9]
mapRes = mapArray.map((i) => i*2 )
console.log(mapRes, mapArray)
document.write(mapRes,'.....', mapArray, '<br>')
//   ************************

document.write('<br>Reduce: ')
let reduceArray = [1,2,3,4,5,6,7]
reduceRes = reduceArray.reduce((acc, item) => acc+item, 0)
console.log(reduceRes, reduceArray)
document.write(reduceRes,'.....', reduceArray, '<br>')
//   ************************

document.write('<br>Some:   ')
let someArray = [12,28,93,74,25,96]
someRes = someArray.some((i) => i>50 )
console.log(someRes, someArray)
document.write(someRes,'.....', someArray, '<br>')
//   ************************

document.write('<br>Every: ')
let everyArray = [12,28,93,74,25,96]
everyRes = everyArray.every(( i) => i>25)
console.log(everyRes, everyArray)
document.write(everyRes,'.....', everyArray, '<br>')
//   ************************

document.write('<br>Find: ')
let findArray = [12,28,93,74,25,96]
findRes = findArray.find((i => i>50) )
// console.log(numbers.find(e => e % 2 == 0));
console.log(findRes, findArray)
document.write(findRes,'.....', findArray, '<br>')
//   ************************

document.write('<br>Include: ')
let includeArray = ['Ali','School', 'Study']
includeRes = includeArray.includes('Study')
console.log(includeRes, includeArray)
document.write(includeRes,'.....', includeArray, '<br>')
//   ************************

document.write('<br>Reverse: ')
let reverseArray = ['z', 'b', 'q', 'g', 'u']
reverseRes = reverseArray.reverse()
console.log(reverseRes, reverseArray)
document.write(reverseRes,'.....',reverseArray, '<br>')
//   ************************

document.write('<br>Sort: ')
let sortArray = ['z', 'b', 'q', 'g', 'u']
sortRes = sortArray.sort()
console.log(sortRes, sortArray)
document.write(sortRes,'.....',sortArray, '<br>')
//   ************************

document.write('<br>Sort Decsending: ')
let desSortArray = [1,5,9,2,7,2]
desSortRes = desSortArray.sort((a,b) => b-a)
console.log(desSortRes, desSortArray)
document.write(desSortRes,'.....',desSortArray, '<br>')
//   ************************

document.write('<br>Concat: ')
let concatArray1 = ['z', 'b', 'q', 'g', 'u']
let concatArray2 = ['2', '6', '9', '8', 4]
concatRes = concatArray1.concat(concatArray2)
console.log(concatRes, concatArray1)
document.write(concatRes,'.....',concatArray1, '<br>')
//   ************************

document.write('<br>Length: ')
let lengthArray1 = ['z', 'b', 'q', 'g', 'u']
let lengthArray2 = ['2', '6', '9', '8', 4]
lengthRes = lengthArray1.concat(lengthArray2)
console.log(lengthRes.length, lengthArray1)
document.write(lengthRes.length,'.....',lengthArray1,'.....',lengthArray1.length, '<br>')
//   ************************

document.write('<br>ToString: ')
let stringArray1 = [12,28,93,74,25,96]
let stringArray2 = 59
stringRes1 = stringArray1.toString()
stringRes2 = stringArray2.toString()
console.log(stringRes1, stringRes2, stringArray1, stringArray2)
document.write(stringRes1,'.....',stringRes2,'.....',stringArray1,'.....',stringArray2, '<br>')
//   ************************

document.write('<br>Join: ')
let joinArray = ['z', 'b', 'q', 'g', 'u']
joinRes = joinArray.join(' ');
console.log(joinRes, joinArray)
document.write(joinRes,'.....',joinArray, '<br>')
//   ************************

document.write('<br>Slice: ')
let sliceArray = ['z', 'b', 'q', 'g', 'u']
sliceRes = sliceArray.slice(1,3);
console.log(sliceRes, sliceArray)
document.write(sliceRes,'.....',sliceArray, '<br>')
//   ************************

document.write('<br>Splice: ')
let spliceArray = [99,0,1,2,3,4,5,6]
spliceRes = spliceArray.splice(2,3)
console.log(spliceRes, spliceArray)
document.write(spliceRes,'.....', spliceArray, '<br>')
//   ************************

document.write('<br>Sorting Using Reduce: ')
let employee = [{id : '123Ali', name : 'Ali', salary : 25000}, 
{id : '234Sunny', name : 'Sunny', salary : 40000}, 
{id : '345Fdr', name : 'FDR', salary : 35000}]

sortReduceArrayRes =  employee.reduce((next, item) => {
    if(item.salary >= 40000){
        return [item, ...next]
    }
    return[...next, item]
},[])
console.log(sortReduceArrayRes, employee)
document.write(sortReduceArrayRes,'.....', employee, '<br>')
//   ************************

document.write('<br>Copy by Reference: ')
let student = [{id : '123Ali', name : 'Ali', gpa : 2.5}]

let student1 = student
student1.gpa = 3.6
console.log(student.gpa, student)
document.write(student.gpa,'.....', student, '<br>')
//   ************************


document.write('<br>Copy by Value Method1: ')
let student2 = {id : '234Sunny', name : 'Sunny', gpa : 3.0}

let student3 = Object.assign(student2)
student3.gpa = 4
console.log(student2, student3)
document.write(student2.gpa,'.....', student3, '<br>')
//   ************************

document.write('<br>Copy by Value Method2: ')
let student4 = {id : '345Fdr', name : 'FDR', gpa : 3.5}

let student5 = {...student4}
student5.gpa = 1.8
console.log(student4, student5)
document.write(student4.gpa,'.....', student5.gpa, '<br>')
//   ************************

