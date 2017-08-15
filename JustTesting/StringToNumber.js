/**
 * 字符串转换为数字，并将两个数组合成一个
 * @type {string}
 */
let str1 = "12356-3456"
changeToCode(str1)
let str2 = "1235653456"
changeToCode(str2)
let str3 = "53456"
changeToCode(str3)

let result = addCheckCode(str2)
console.log(result);

function changeToNum(str){
    let result = [];            //编码数组

    console.log(str[2])
    if(str.indexOf("-") >= 0){
        // console.log(sub_str);
        let sub_str = str.split("-");
        sub_str[0] += sub_str[1]

        // console.log(typeof(sub_str[0][4]))
    }
    return str[0];
}

function getNumbers(str) {
    // console.log(str)
        if (str.indexOf("-") >= 0) {
            let sub_str = str.split("-");
            str = sub_str[0] + sub_str[1];
        }
        // console.log(str);
        return str;

}

function changeToCode(str) {
    str = getNumbers(str);
    // let correspond_array = getArrays();     //将数字转换为编码对应的二进制所对应的数（好吧，有点绕）
    let result = [];

    for(let i=0; i<str.length; i++){
        let num = parseInt(str[i]);
        // let code_binary = getConversion(correspond_array[num])  //将二进制数转换为编码
        // result.push(codeToZip(code_binary));    //将二进制数转换为编码
        result.push(num)
    }

    console.log(result);

    return result;
}

/**
 * 给定一个字符串数字，计算其校验码，冰江每一位转换为数字
 * @param nums
 */
function addCheckCode(nums){
    let result = [];
    let sum = 0;

    for(let i=0; i<nums.length; i++)
    {
        let num = parseInt(nums[i]);
        sum += num;
        result.push(num)
    }
    let check_code;
    (sum%10 ===0) ? check_code = 0 : check_code = 10 - sum%10
    result.push(check_code);

    return result;
}