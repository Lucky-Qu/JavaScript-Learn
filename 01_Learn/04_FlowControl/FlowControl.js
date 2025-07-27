//流程控制语句
//if 的格式为
// if(判定条件) {执行代码}
let a = "Hi"
if (a === "Hi") {
    console.log("Hi! From If")
}

//switch语句格式如下
switch (a) {
    case "Hi":
        console.log("Hi! From Switch")
        break;
    default:
        break
}

//while语句格式如下
while (a === "Hi") {
    console.log("Hi! From While")
    break
}

//for循环格式如下
for (let i = 0; i < a.length; i++) {
    console.log(i)
}