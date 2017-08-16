/**
 题目：找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 **/
let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log(arr + "重复的元素有：" + findRepeatString(arr).join(","));

/**
 * 找出数组中重复的元素
 * @param arr
 * @returns {Array}
 */
function findRepeatString(arr){
    let result = [];

    arr = arr.sort();
    for(let i=1; i<arr.length-1; i++){
        if((arr[i-1] === arr[i]  ||  arr[i+1] === arr[i]) && result.indexOf(arr[i]) < 0){
            result.push(arr[i])
        }
    }

    return result;
}