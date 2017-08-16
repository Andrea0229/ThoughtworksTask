/**
 题目：找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 **/

let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
// console.log(arr.sort())
console.log(arr + "重复的元素有：");
console.log(findRepeatString(arr).join(","));


function findRepeatString(arr){
    let result = [];

    arr = arr.sort();                           //数组排序
    for(let i=1; i<arr.length-1; i++){
        if(arr[i-1] === arr[i]  ||  arr[i+1] === arr[i]){
            result.push(arr[i])
        }
    }

    return result;
}