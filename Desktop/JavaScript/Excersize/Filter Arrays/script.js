// function fiveAndGreaterOnly(arr) {
//   var filteredArray = arr.filter(function(num){
//     return num > 5;
//   })
// return filteredArray;
// }
//
// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));







// function evensOnly(arr) {
//   var filteredArray = arr.filter(function(num){
//     return num % 2 === 0
//   })
//   return filteredArray;
// }
//
// console.log(evensOnly([3, 6, 8, 2]));





function fiveCharactersAndLessOnly(arr) {
  var filteredArray = arr.filter(function(word){
    return word.length < 5
  })
  return filteredArray;
}

console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))
