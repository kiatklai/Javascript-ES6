//splice(ตำแหน่งที่จะลบ , จำนวนที่จะลบ , (ค่าที่ต้องการจะแทรกเข้าไปแทน))

const data = [10,20,30,40,50]
data.splice(1,3,999) //index=1,count=3,replace
console.log(data)

//slice(ตำแหน่งเริ่มต้น , ตำแหน่งสุดท้าย-1)
const data2 = [10,20,30,40,50]
const data3= data2.slice(1,3) //1,2 [20,30]
console.log(data3)