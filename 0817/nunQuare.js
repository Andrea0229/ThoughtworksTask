/**
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 * 例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
 * 要求：不要使用for，while循环
 * @type {[number,number,number,number,number]}
 */

let arr = [1,2,6,3,77];
console.log(arr + "平方是" + numQuare(arr));
function numQuare(arr){
    /* 方法一
    let result =[]

    arr.forEach(item=>{
        result.push(Math.pow(item,2));
    });*/

    //方法二
    let result = arr.filter(function (x) {
        return Math.pow(x,2);
    });

    return result;
}
