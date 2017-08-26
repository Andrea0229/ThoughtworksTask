// let ch = require('cli-interact').getChar;
// let answer1 = ch('please input a char');
// console.log(answer1);
let query = require('cli-interact').getYesNo;
let answer2 = query('Y/N');
console.log(answer2);

let getNumber = require('cli-interact').getNumber;
let num = getNumber('Please input a number:');
console.log(num);

let question = require('cli-interact').question;
let answer = question('your name ');
console.log(`welcome ${answer}`)

// let a = readlineSync.question('eee')
// console.log(a)

/* 键盘输入，回车键确定 */
let readlineSync = require('readline-sync');
/*


let name = readlineSync.question(`Please input your name`);
console.log("22");
console.log(`welcome ${name}`);*/

/*
try {
    answer = readlineSync.question('What is your favorite food? :');
} catch (e) {
    console.error(e);
    process.exit(1);
}
*/
