// Array Reduce
// 書き方: array.reduce((ค่าที่ถูกประมวลผล:จะเริ่มจากค่าเริ่มต้น,element)=>{},ค่าเริ่มต้น) //value-0

const data = [10,20,30,40,50]
//old type
// const sum =data.reduce((value,e)=>{
//   const total = e+value 
//   return total
// },0)

//new type
const sum =data.reduce((value,e)=>e+value,0)
console.log(sum)

//reduce with object
const cart = [
  {name:"bag",price:2000},
  {name:"book",price:500},
  {name:"camera",price:25000}
]

const all = cart.reduce((value,e)=>e.price+value,0)
console.log("Total price is ",all)