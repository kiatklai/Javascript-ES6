//push , pop , shift , unshift

const data = [10,20,30]
data.push(500)  //→後ろに追加
console.log(data)  //→　[ 10, 20, 30, 500 ]

//pop => 一番後ろにある値を削除する
data.pop()
console.log(data)

//shift => 一番前にある値を削除する
data.shift()
console.log(data)

//unshift =>  一番前に追加
data.unshift(999)
console.log(data)