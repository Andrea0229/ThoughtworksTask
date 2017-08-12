console.log(getAllNarcissNumber());
function getAllNarcissNumber(){
    let allNar=[];
    for(let i=100; i<=999; i++){
        let item = getDigit(i);
        let count = Math.pow(item[0],3) + Math.pow(item[1],3) + Math.pow(item[2], 3);
        if(count === i){
            allNar.push(i);
        }
    }
    return allNar;
}

function getDigit(num){
    let digit = [];
    let bai = parseInt(num/100);
    let shi = parseInt((num - bai * 100) / 10)
    let ge = parseInt((num - bai*100 - shi*10) / 1);
    digit = [bai, shi, ge];
    return digit;
}