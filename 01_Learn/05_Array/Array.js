//定义数组
let arr = [1, 2, 3, 4, 5]
//数组有push方法，可以将一个或多个数加入到数组的末端并返回数组的长度
console.log(arr.push(6))
console.log(arr)
//数组有unshift方法，可以将一个或多个数加入到数组的头部并返回数组的新长度
console.log(arr.unshift(0))
console.log(arr)
//数组有pop方法，可以将数组末尾的值删除，返回被删除的值
console.log(arr.pop())
console.log(arr)
//数组有shift方法，可以将数组第一个值删除，返回被删除的值
console.log(arr.shift())
console.log(arr)
//数组有splice方法，接受两个值，第一个值是开始删除的位置，第二个值是要删除的个数
console.log(arr.splice(0, 1))
console.log(arr)
