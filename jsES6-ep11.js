//Array map =>forEachみたいに全ての値を取得して、処理して、"新しい"Arrayに代入する

const numbers = [10,20,30,40,50,60]

// const result = numbers.map(e=>{
//   return e*2
// })

//省略
const result = numbers.map(e=>e*2)  //eはelement=>全ての取得された値

console.log(result)  //→[ 20, 40, 60, 80, 100, 120 ]

//stringでも使える
const data = ["雨","晴れ","曇り","晴れ","強風","雨","晴れ"]
const result2 = data.map((e,i)=>{  //e=element, i= index
  return `${i+1}日の天気は ${e}`
})
console.log(result2)

//map with object
const tenki =[
  {day:"01/07/2023",weather:"晴れ",temp:30},
  {day:"03/07/2023",weather:"曇り",temp:28},
  {day:"05/07/2023",weather:"雨",temp:25}
]

//old type
// const result3 = tenki.map(e=>{
//   return e.weather
// })
const result3 = tenki.map(e=>e.weather)

console.log(result3)

// change value in Array
const num = [10,20,30,40,50]
const mapdata = num.map(e=>100)  //→ [ 100, 100, 100, 100, 100 ]になる
console.log(mapdata)