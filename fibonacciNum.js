
var num = 10;
var fiboNumber = getFibonacciNum(num);
console.log(getFibonacciNum(num));
console.log("斐波纳契数列的前" + num +"个数字是：" + fiboNumber
    + "\n第" + num +"个数是：" + fiboNumber[fiboNumber.length-1])
function getFibonacciNum(num){
    if(num === 0){
        return [0];
    }
    else if(num == 1){
        return [0,1];
    }
    else{
        var fiboNumbers = [0,1];
        for(let i=2; i<num; i++){
            fiboNumbers.push(fiboNumbers[i-1]+fiboNumbers[i-2]);
        }
        return fiboNumbers;
    }
    // return fiboNumbers[fiboNumbers.length-1];

}