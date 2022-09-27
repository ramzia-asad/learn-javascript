// 11 sep 2022    
var arr = [1,2,3,3,4,6,7,8,9,3,9]
var arr2 =[];
var i =1;
let val = arr[0];
    do{
        arr2.push(val)
        if(arr[i] == val+1){
            i++;
            val++;
        }else{
            break;
        }
    }while( i< arr.length)

    console.log(arr2)
    document.write('Given array: ', arr, '<br>')
    document.write('Sequence: ',arr2, '<br>')
//   ************************

    document.write('<br>Remove Duplicate Using Loops: ')
    function removeDuplicate(arr) {
        const result = [];
      
        for (let i of arr) {
          let noDuplicate = true;
      
          for (let j of result) {
            if (i === j) {
              noDuplicate = false;
              break;
            }
          }
          if (noDuplicate) {
            result.push(i);
          }
        }
        return result;
      }
       let removed = removeDuplicate(arr)
       console.log(removed)
       document.write('Given array: ', arr, '<br>')
       document.write('Duplicate Removed Array: ',removed, '<br>')
   