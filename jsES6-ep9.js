//for loop , forEach , forof

const data = [10,20,30,40,50,60,70,80]

// for(let i=0;i<data.length;i++){
//   if (data[i]>=30) break
//   console.log(`第${i}目 = ${data[i]}`)
// }

// let sum = 0
// data.forEach(e=>{
//   if (e>=30) {
//     console.log("Good")
//   }
//   console.log(sum+=e)
// })

for(const e of data){
    if (e>=30) break
   console.log(`array member = ${e}`)
}