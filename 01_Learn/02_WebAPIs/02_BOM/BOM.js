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
},0)
console.log(3)
//location的数据类型是对象，他拆分并保存了URL中的各个组成部分
// 修改location的href属性可以实现跳转网页的效果
const baidu = document.getElementById("baidu")
baidu.addEventListener("click", function(){
    location.href="https://baidu.com"
})
//location的hash属性中保存了符号#的后面部分
// 使用reload方法可以刷新页面，参数填true为强制刷新
// location.reload()

//navigator的数据类型是对象，其存储了浏览器相关的信息
// 其中userAgent中存储了用户的平台信息
console.log(navigator.userAgent)
//history存储了历史相关信息，可以使用go，forward，back方法来回退，前进页面
// history.back()
//本地存储
//js支持将数据存储到浏览器当中以便读取