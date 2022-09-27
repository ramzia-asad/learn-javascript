let arr = [1,2,3,4,7,'str','13']
let sumStr = 0
for(let i = 0; i < arr.length; i++){

    if(isNaN(parseInt(arr[i])) )
        {console.log(`'${arr[i]}' is not a number`)}

    else {
        sumStr+= parseInt(arr[i])}
}
console.log(sumStr)