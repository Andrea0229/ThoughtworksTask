var result = [];
var number = 90;
console.log(number+"的质因数有：");
changeNumber(number);

function changeNumber(num){
    var i = 2;
    while(i <= num){
        if(isPrime(i) && num%i===0){
            num = num/i;
            result.push(i);
        }
        else{
            i++;
        }
    }
    console.log(result);
}


/**
 * 判断一个数是否为质数
 * @param num
 */
function isPrime(num){
    if(num === 2){
        return true;
    }
    for(let i=2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
