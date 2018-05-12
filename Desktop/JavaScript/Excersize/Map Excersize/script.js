var cars = [
    {
        type: 'chevy'
    },
    {
        type: 'mustang'
    },
    {
        type: 'viper'
    },
    {
        type: 'jeep'
    }
]


var angryCars = cars.map(function(car){
  return car.type.toUpperCase();
})
console.log(angryCars)


// for (var i = 0; i < cars.length; i++) {
//   angryCars.push(cars[i].toUpperCase());
// }
