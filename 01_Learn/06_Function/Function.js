//js中声明函数的格式为：
function example(){}
//js的函数中，传入参数只需名字，无需类型，给形参赋值的意思为：如果没有传入，他的默认值为
function addNumber(num1 = 0, num2 = 0){
    return num1 + num2
}
//存在匿名函数
let a = function(num1, num2) {
    return num1 + num2
}
console.log(a(1,2))

//存在逻辑终端
//&& 左边为false就短路
//|| 左边为true就短路