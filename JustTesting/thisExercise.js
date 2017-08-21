function get_a(){
    // return this.a;
    console.log(this.a)
}

var p = {};
p.a = 3;
p.run = get_a;
p.run();

/*
let arr = [4,5,8,9];
var newArr_1 = arr.some(unction(v,i,arr){
    console.log(arr); //[4,5,8,9]]
    console.log(this); //{this: 'this'}
    v>=2;
},{this: 'this'})
console.log(re); //2

var newArr_2= arr.some(function(v,i,arr){
    console.log(this); //输出一下是什么结果？？？？？？？？？？？？
    v>=10;
},'_this');
console.log(re2); //undefined*/

var re = [1,2,3,4].find(function(v,i,arr){
    console.log(arr); //[1,2,3,4]
    console.log(this); //{this: 'this'}
    return v>=2;
},{this:'this'})
console.log(re); //2
var re2 = [1,2,3,4].find(function(v,i,arr){
    console.log(this); //[String: '_this']
    return v>=10;
},'_this')
console.log(re2); //undefined
