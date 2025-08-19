//在JS中，最大的对象即window，其包含document等
//使用setTimeout可以将回调函数设定在几秒后执行，与setInterval的区别书不进行复用
const ad = window.document.getElementById("ad")
setTimeout(function (){
    ad.style.display = "none"
}, 5000)
//清除方式与setInterval相似
// clearTimeout()
//在js中，事件的执行遵循先执行同步任务，再执行任务队列的问题，如下方返回值为132
//执行栈和任务队列和异步api称为事件循环
console.log(1)
setTimeout(function (){
    console.log(2)
})
console.log(3)