let img = document.getElementById("img")
let introduce = document.getElementById("introduce")
introduce.innerText = img.alt
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const leftBtn = document.getElementById("leftBtn")
const rightBtn = document.getElementById("rightBtn")
let activeBtn = document.querySelector(".active")
let btnNum = 1
function changeImg(btn, num){
    activeBtn = document.querySelector(".active")
    activeBtn.classList.remove("active")
    btn.classList.add("active")
    img.src = `../../00_Static/01_img/img${num}.jpg`
    img.alt = `第${num}张图片`
    introduce.innerText = img.alt
    btnNum = num
}
btn1.addEventListener("click", function (){
    changeImg(btn1, 1)
})
btn2.addEventListener("click", function(){
    changeImg(btn2, 2)
})
btn3.addEventListener("click", function(){
    changeImg(btn3, 3)
})
btn4.addEventListener("click", function(){
    changeImg(btn4, 4)
})
btn5.addEventListener("click", function(){
    changeImg(btn5, 5)
})
let IntervalId = setInterval(function (){
    btnNum++
    if (btnNum > 5){
        btnNum = 1
    }
    changeImg(document.getElementById(`btn${btnNum}`),btnNum)
}, 3000)
img.addEventListener("mouseleave", function (){
    clearInterval(IntervalId)
    IntervalId = setInterval(function (){
        btnNum++
        if (btnNum > 5){
            btnNum = 1
        }
        changeImg(document.getElementById(`btn${btnNum}`),btnNum)
    }, 3000)
})
img.addEventListener("mouseenter", function (){
    clearInterval(IntervalId)
})
leftBtn.addEventListener("click", function (){
    btnNum--
    if (btnNum < 1){
        btnNum = 5
    }
    changeImg(document.getElementById(`btn${btnNum}`),btnNum)
})
rightBtn.addEventListener("click", function (){
    btnNum++
    if (btnNum > 5){
        btnNum = 1
    }
    changeImg(document.getElementById(`btn${btnNum}`),btnNum)
})