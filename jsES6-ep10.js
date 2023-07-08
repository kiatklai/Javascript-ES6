//search information in Array
//indexof(information) => 見つかった場合、index numberが出る。ない場合、-1が出る
//find(information) =>forEachみたいに全ての値を検索する。見つかった場合、値が出る。ない場合、undefinedが出る
//findIndex(information) =>見つかった場合、index numberが出る。ない場合、-1が出る

const colors = ["red","blue","white","black","yellow","green"]
// const search= colors.indexOf("blue")
// console.log(search)
const find = colors.find(element=>element==="black")
console.log(find)

const find2 = colors.findIndex(element=>element==="black")
console.log(find2)