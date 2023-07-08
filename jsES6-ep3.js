//spread operator

const newArr = [100,200,300]
const data = [10,20,...newArr]  //add ... before [newArr]
//or↓
const newColor = ["black","blue","green"]
data.push(...newColor)
 
console.log(data)