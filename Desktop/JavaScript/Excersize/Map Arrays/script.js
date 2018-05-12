

// function doubleNumbers(arr) {
//   var mappedArray = arr.map(function(num){
//     return num * 2
//     //return num.toString()
//   })
//   return mappedArray;
// }




// console.log(doubleNumbers([2, 5, 100]));

// function namesOnly(arr){
//  var mappedArrat = arr.map(function(person){
//    return person.name
//  }) return
//
// }
//
// console.log(namesOnly([
//    {
//        name: "Angelina Jolie",
//        age: 80
//    },
//    {
//        name: "Eric Jones",
//        age: 2
//    },
//    {
//        name: "Paris Hilton",
//        age: 5
//    },
//    {
//        name: "Kayne West",
//        age: 16
//    },
//    {
//        name: "Bob Ziroll",
//        age: 100
//    }
// ]))
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]







function thereIsNoSpoon(arr){
var mappedArray = arr.map(function(person){
  if(person.age >= 18){
    return `${person.name} can got to the Matrix`
  } else if (person.age < 18){
    return `${person.name} is underage!`
  }
})
return mappedArray

}

console.log(thereIsNoSpoon([
   {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
]))
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
