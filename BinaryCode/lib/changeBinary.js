
numberToBinary();
binaryToNumber();
console.log("21是" + odevity(21));
console.log("68是" + odevity(68));

/**
 * 将数字或字符串转化为二进制
 * 转化后的二进制是一个string类型的数组
 */
function numberToBinary() {
    /** 数字转化为8位数的二进制（不足8位，高位补0） **/
    let num  = 23;
    let binary = num.toString(2);          //转化为二进制
    binary = Array(9-binary.length).join(0)+binary;      //将二进制数转化为指定位数的二进制数
    console.log("数字 " + num + "的二进制数是：" + binary + "\n转化后二进制类型为：" + typeof (binary));
    console.log("二进制的第5位是" + binary[5] + ",类型是" + typeof (binary[5]))

    /** 字符串转化为二进制：需要先转换为数字 **/
    let str  = "21";
    binary = parseInt(str).toString(2);          //转化为二进制
    binary = Array(9-binary.length).join(0)+binary
    console.log("\n字符串 " + str + "的二进制数是：" + binary + "\n转化后二进制类型为：" + typeof (binary) + "\n")
}

/** 将二进制数转化为十进制数 **/
function binaryToNumber() {
    let binary = "0011010";
    let number = parseInt(binary, 2);

    console.log("二进制" + binary + "对应的十进制数是" + number + "\n转化后类型是" + typeof (number) + "\n")
}

/*
/!** 位移遍历二进制的每一位 **!/
function getBinaryItem(){
    let binary = "010010";

}*/

/** 二进制应用：判断奇偶 **/
function odevity(num) {
    let result;
    (num & 1) ? result = "奇数" : result = "偶数";

    return result;
}

