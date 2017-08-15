let arr = [1,3,5,2,6,8,3,3]
let item = 3;
console.log(arr + "中，" + item + "出现了" + getNum(arr, 0) + "次")

function getNum(arr, i) {
    if(i >= arr.length) {
        return 0;
    } else if(arr[i] != item){
        return 0 + getNum(arr, i+1);
    } else {
        return 1 + getNum(arr, i+1);
    }
}
