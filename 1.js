// var arr = []
// for (var i = 0; i < 5; i++) {
//   var s = Math.random() * 91 + 10;
//   arr.push(s)
//   if (arr[i] < 50) {
//     arr[i] = 0
//   }
// }
// console.log(arr)
var obj = {}
var dz = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";
dz = dz.split("?")[1].split("&")
for (var i = 0; i < dz.length; i++) {
  var arr = dz[i].split("=")
  console.log(arr)
  obj[arr[0]] = arr[1]
}
console.log(obj)




// var arr = [1, 2, 1, 2, 3, 4, 5, 6]
// var set = new Set(arr)
