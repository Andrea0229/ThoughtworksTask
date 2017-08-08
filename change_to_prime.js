var result = [];
var number = 100;
console.log(number+"的质因数有：");
changeNumber(number);

function changeNumber(num){

    for(; num>=1; ){
        num = get_prime(num)
    }

    console.log(result);
}

/**
 * 获取其中一个质因数
 * @param num
 * @returns {Number|*}
 */
function get_prime(num){
    for(let i=2; i<=num; i++){
        if(isPrime(i)){     //判断i是否为质数
            if(num%i === 0){    //num是否能被i整除
                num = parseInt(num/i)
                result.push(i);
                return num;
                // changeNumber(num)
            }
        }
    }
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