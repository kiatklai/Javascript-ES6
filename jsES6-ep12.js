// Array Filter =>forEachみたいに全ての値を取得して、条件を設定して、新しいArrayに代入する
const data = [10,20,30,40,50,60]

//old type
// const result = data.filter(e=>{
//   return e>20   //条件を設定：20以上の値を出したい
// })

const result = data.filter(e=>e>20)
console.log(result)

//Array Filter with object

const emp = [
  {name:"ooh",salary:300000,department:"エンジニア"},
  {name:"toto",salary:210000,department:"CS"},
  {name:"ying",salary:250000,department:"営業"},
  {name:"tokyo",salary:241000,department:"営業"},
  {name:"hediko",salary:180000,department:"sell"}
]

//old type
// const result2 = emp.filter(e=>{
//   return e.salary>240000
// })

//new type and 複数の条件
const result2 = emp.filter(e=>e.salary>240000).filter(e=>e.department=="営業")
console.log(result2)