
/**
 * 定义一个people类
 */
class People{
    /** 构造函数 **/
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    printMsg(){
        console.log(this.id + ":" + this.name);
    }
}
let p1 = new People("01", "bendan");
console.log(typeof (p1));
p1.printMsg();

