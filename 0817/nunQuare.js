
let arr = [1,2,6,3,77];
console.log(numQuare(arr));
function numQuare(arr){
    let result =[]

    arr.forEach(item=>{
        result.push(Math.pow(item,2));
    });

    return result;
}