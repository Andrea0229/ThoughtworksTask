var list = [1,1,2,2,3,4,4,7,8,9,9,8,7,10,10,90,89,78,67,78,89,90,67];
console.log("数组"+list+"中仅出现一次的数字是："+getOnlyOne(list));

function getOnlyOne(list){
    let [single,single_sum, double_sum] = [[], 0, 0];

    list.forEach(item =>{
        if(single.indexOf(item) < 0){
            single.push(item);
            single_sum += item;
        }
        double_sum += item;
    })
     return single_sum*2 - double_sum;
}