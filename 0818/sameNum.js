
let arr = [1,3,7,1,4,23,1,5,6,90];
console.log(arr + "中与1相等的数组下标有：")
console.log(SameNum(arr,1).join(" "));

function SameNum(arr, target) {
    let result = [];
    arr.filter(function(item, index){
        if(item === target){
            result.push(index)
        }
    });
    return result;
}