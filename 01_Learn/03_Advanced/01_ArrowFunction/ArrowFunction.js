//箭头函数更适合本来需要匿名函数的地方
//格式为(参数) => {函数体}
const fn = () => {
    return "Hi"
}
// 如果函数只有一个参数，可以省略小括号
const echo = word => {
    console.log(word)
}
//函数体只有一行代码的时候，可以省略大括号
const saySomething = something => console.log(something)
//函数体只有一行代码的时候，可以省略return
const exp = num1 => num1 + num1
//箭头函数可以直接返回一个对象
const newPerson = personName => ({name: personName})