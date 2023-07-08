//.join => arrayをstringに変更させる  join("*")=> 挟んでいる記号を　*　に変更
const data1 = [100,200,300]
const data2 = [400,500]

console.log(data1)
console.log(data1.join(":")) //joinを使っているところのみ影響ある
console.log(data1)    

//concat => arrayとarrayを合体させる
const datas = data1.concat(data2)
console.log(datas)