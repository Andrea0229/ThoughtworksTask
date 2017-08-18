/**
 * 定义一个fruit类
 */
let methodName = "printName";
class Fruit{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName(){
        console.log(this.name);
    }
    setName(name){
        this.name = name;
    }
    getPrice(){
        console.log(this.price);
    }

    //类的属性名可以是变量
    [methodName](){
        console.log(this.name);
    }
}

//在类的实例上调用方法，等同于调用原型的方法
let apple = new Fruit("apple",1.2);
apple.getName();
Fruit.prototype.setName("pear")
Fruit.prototype.getName()
apple.printName();
console.log("实类对象：" + apple.hasOwnProperty('name'));
console.log("实类方法：" + apple.hasOwnProperty('getPrice'))
