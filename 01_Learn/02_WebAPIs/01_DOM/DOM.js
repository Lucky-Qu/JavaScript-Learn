// js 中可以用document来操作文档中的元素
// document.querySelector可以用css选择器的方式来获取文档中的元素
// 返回第一个选择到的元素
const a = document.querySelector(".div1")
//与上一个方法类似，但是是返回所有匹配的元素
//querySelector获取到的是一个伪数组，其没有数组的方法，但是拥有索引号等，可以遍历取出其内含物
const b = document.querySelectorAll("div")
// 如果知道他的ID，使用getElementById更快
let c = document.getElementById("1")
//可以修改获取到的元素的样式
a.style.color = "red"
//可以修改获取到的元素的内容
a.innerHTML = "Hello World !"
//当需要修改较多样式的时候，可以预先给他写一个类，然后把他的类名切换成那个类的名字
//但是这种方法为覆盖原先类名，可以使用classList来进行增删改
a.classList.add("box1")
a.classList.remove("box1")
//toggle方法的作用是，有则不管，没有则加上
a.classList.toggle("box1")
//在H5中，可以通过dataset来获取所有自定义属性的内容，自定义属性标准为data-xxx
console.log(a.dataset.id)
//定时器函数，每隔一段设定好的时间就调用给定的函数,时间的单位为毫秒，他会返回一个ID，这个ID为该定时器的ID
let id = setInterval(function (){},1000)
//这个函数可以关闭传入id的定时器
clearInterval(id)
//元素对象.addEventListener可以添加事件监听
//事件类型有以下常见事件
//鼠标触发事件：click-单击 mouseenter-鼠标经过 mouseleave-鼠标离开
//表单获得光标：focus-获得焦点 blur-失去焦点
//键盘触发：Keydown键盘按下触发 Keyup键盘抬起触发
//表单触发：input 用户触发事件
const btn = document.querySelector("#button")
btn.addEventListener("click", function (){
    alert("Hi")
})
// 为事件回调函数绑定的第一个参数为事件对象，包含相关的参数
const input = document.getElementById("input")
input.addEventListener("keyup", function (e){
    if (e.key === "Enter"){
        alert("刚刚键入了Enter")
    }
})
//在普通函数中，this指代的是window，在调用函数中，指代的是调用者
//在调用过程中，如果子元素的一个绑定事件触发，那么他父元素的绑定事件也会依次冒泡触发，通过使用事件对象stopPropagation来阻止冒泡
input.addEventListener("keyup", function (e){
    if (e.key === "Enter"){
        alert("刚刚键入了Enter")
    }
    e.stopPropagation()
})
//可以使用removeEventListener来解绑事件监听，匿名函数无法解绑
input.removeEventListener("click", function(){})
//利用冒泡的原理，可以将一个想要绑定到子元素上的事件绑定到父元素身上来委托事件从而简化代码书写
//通过事件对象中的target来获取调用的子元素
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")
//给父元素绑定事件
div2.addEventListener("click", function (e){
    e.target.style.backgroundColor = "gray"
})
//想要阻止默认事件行为（如超链接跳转，提交表单），可以使用事件对象.preventDefault
// const example3 = document.querySelector("a")
// example3.addEventListener("click", function (e){
//     e.preventDefault()
// })
//可以通过scroll事件来获取滚动参数
input.addEventListener("scroll", function (e){
    input.scrollTop
})
//可以通过实例化一个时间来获取时间 不填写参数为获取当前时间，填写参数为获取参数指定的时间
const time1 = new Date()
const time2 = new Date("2025-7-29 08:30:00")
console.log(time1, time2)
//日期对象中有许多方法以便于获取具体时间
console.log(time1.getDay())
//使用日期对象中的getTime方法可以获得当前时间戳，也可以使用date.now来获得时间戳
console.log(time1.getTime())
//在dom树上可以通过关系来获取各个节点
const example3 = document.getElementById("div3")
console.log(example3.parentNode)
//可以访问子节点的parentNode来访问他的父节点
divExample.parentNode
//可以通过children来获得所有的子节点（伪数组）
divExample.children
//使用document中的createElement可以创建一个节点
const divExample = document.createElement("div")
// 可以追加到一个元素中作为他的子元素
document.body.appendChild(divExample)
//可以通过insertBefore方法将元素插入到指定子元素前
document.body.insertBefore()
//cloneNode方法可以克隆一个元素，true为深克隆，false为浅克隆
document.body.cloneNode(true)
//可以通过父元素的remove方法来删除子元素
document.body.removeChild(divExample)