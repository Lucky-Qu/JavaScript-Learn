//定义正则表达式的规则格式
//定义规则
let regex = /Hello/
//是否匹配
console.log(regex.test("Hello World"))
//上面返回的是true或false，下面返回的是一个数组
console.log(regex.exec("World Hello"))
//元字符
//边界符
//^表示匹配行首的文本
//$表示匹配行尾的文本
regex = /^Hello/
console.log(regex.test("Hello World"))
console.log(regex.test("World Hello"))
regex = /Hello$/
console.log(regex.test("Hello World"))
console.log(regex.test("World Hello"))
regex = /^Hello$/
console.log(regex.test("Hello"))
console.log(regex.test("Hello World"))
console.log(regex.test("World Hello"))
//量词
//量词用来设定某个模式出现的次数
//* 重复0次或多次
//+ 重复1次或多次
//? 重复0次或1次
//{n} 重复n次
//{n,} 重复n次或更多次
//{n, m}重复n到m次
console.log(/^H*$/.test("HHH"))
console.log(/^H{5,7}$/.test("HHH"))
console.log(/^H{5,7}$/.test("HHHHHH"))
console.log(/^H{5,7}$/.test("HHHHHHHHHH"))
//字符类
// [] 匹配字符集合，出现集合内的任何元素都会为true
console.log(/[abc]/.test("a"))
//使用连字符来表示一个范围
console.log(/^[a-zA-Z]{5,}$/.test("hajsbuUUUS"))
console.log(/^[a-zA-Z]{5,}$/.test("hajsjdsanU2"))
console.log(/^[a-zA-Z]{5,}$/.test("hasd"))
//[]内写连字符表示取反
//.表示除换行符的任何单个字符
console.log(/[^.]/.test("\n"))
//预定义类
// \d 匹配0-9
// \D 匹配除了0-9
// \w 匹配任意字母，下划线，数字
// \W 匹配除了字母，下划线，数字
// \s 匹配空格
// \S 匹配非空格