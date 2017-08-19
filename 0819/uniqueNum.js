/**
 * 数组去重
 * 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 * @type {[string,number,number,number,number,number,string,string]}
 */

let arr = ['s',1,3,2,1,3,'s','a','a','2','w']

console.log(arr+"去重之后：");
console.log(getUniqueNumber(arr));

function getUniqueNumber(arr){
    return new Set(arr);
}

/*
function printSet(setArr){
    setArr.forEach(item=>{
        console.log(item);
    })
}*/

// console.log(`${arr}去重之后：${getUniqueNumber(arr)}`);
// let setArr = getUniqueNumber(arr);
// printSet(setArr);
