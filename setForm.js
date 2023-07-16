//Array内の重複している値をなくす

const myArr=[10,20,20,30,30,30,40,40,40,40]
//第一方法
// const result = Array.from(new Set(myArr))
//第二方法
const result =[...new Set(myArr)]
console.log(result)