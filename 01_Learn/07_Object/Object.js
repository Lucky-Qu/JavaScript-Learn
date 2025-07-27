//声明对象有两种方法，较为常用的是第一种方法
//第一种方法
let example1 = {}
//第二种方法
let example2 = new Object()
//对象的增删改查
let human = {
    name: "Lucky",
    age: "21",
    gender: "Male"
}
console.log(human)
//查
console.log(human.name)
console.log(human['name'])
//改
human.name = "LuckyQu"
console.log(human.name)
//增
human.hobby = "Swim"
//删
delete human.hobby

//遍历对象
for (let k in human) {
    console.log(human[k])
}
