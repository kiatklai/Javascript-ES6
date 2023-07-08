//Rest Parameter
//定義時、メソッド内にいくら値を入れても、大丈夫。

summation=(...numberArr)=>{
  let total=0
  for(let number of numberArr) total+=number
  return total
}

console.log(summation(500,1000));
console.log(summation(500,1000,1420));
console.log(summation(500,1000,258,1200,8500));
console.log(summation(500,1000,58,45,950,47));