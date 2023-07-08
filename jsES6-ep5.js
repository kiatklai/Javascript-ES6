//destructuring

//Array
const colors= ["赤","緑","白"]
//old
// const red = colors[0]
// const green = colors[1]
// const white = colors[2]
//new
const [red,green,white] = colors

//if just only want white
// const [,,white] = colors

console.log(red)
console.log(green)
console.log(white)

//object

const product = {
  productName : "PC",
  price : 30000,
  stock : 10
}

//old
// const productName = product.productName
// const price = product.price
// const stock = product.stock
//new
const {productName:pn,price:p,stock:s} = product
// if property name is the same as variable, we can write just property name as below:
//const {productName,price,stock} = product

console.log(pn)
console.log(p)
console.log(s)