//includeで条件をチェックする

const amount="two"
//普通の書き方
// if(amount==1 || amount==2 || amount=="one" || amount=="two"){
//   console.log("通常")
// }else{
//   console.log("エラ－")
// }

//include
if([1,2,"one","two"].includes(amount)){
  console.log("通常")
}else{
  console.log("エラ－")
}