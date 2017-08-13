/**
 * 寻找中位数
 * @type {[number,number,number,number,number,number,number]}
 */
var arr1 = [81,22,35,64,34,5,7]
var arr2 = [3,4,3,7,1,87,23,12,45];
console.log(arr1+"中位数是:"+FindMedain(arr1))
console.log(arr2+"中位数是:"+FindMedain(arr2));

function FindMedain(arr) {
    let med = parseInt(arr.length/2);

    for(let i=0; i<=med; i++){
        let min = i;
        for(let j=i; j<arr.length; j++){
            if(arr[min] > arr[j]){
               min = j;
            }
        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    if(med%2 !== 0){
        return arr[med];
    }
    else{
        return (arr[med-1]+arr[med])/2
    }
 }