//js中使用let关键字来声明变量
let a = 1
alert(a)

let b = prompt("随便输入点什么")
alert(b)

let x = prompt("连着输入三个东西")
let y = prompt("连着输入三个东西")
let z = prompt("连着输入三个东西")
document.write("你刚刚输入的是",x,y,z)

//声明数组
let name = ["LuckyQu","Lucky","Qu"]

//使用const关键字来声明常量
const pi = 3.14

//JS中共有两大类数据类型，分别为基本数据类型和引用数据类型
//基本数据类型有
//number 数字型
//string 字符串型
//boolean 布尔型
//null 空类型
//undefined 未定义型
// 引用数据类型有
//object 对象
//function 函数
//array 数组

//模版字符串 使用反引号包裹，内部变量用 ${}包裹
let myName = "LuckyQu"
let aExp = `Hello ${myName}!`
alert(aExp)

//检测数据类型 可以使用关键字typeof来检测数据的数据类型0
alert(typeof myName)

//强制类型转换 和Go类似
let c = Number("1234567890")
/// === 可以用来判定两边的类型和值是否都相等
console.log(c === "a")
//  这两个方法可以取出整数，整数和小数，忽略后面单位
parseInt("12.5px") //12
parseFloat("12.5px") //12.5