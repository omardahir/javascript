var cars = [
    {
        type: 'chevy',
        year: 2008
    },
    {
        type: 'mustang',
        year: 2000
    },
    {
        type: 'viper',
        year: 1999
    },
    {
        type: 'jeep',
        year: 2015
    }
]

var newCar = cars.filter(function(car){
  return car.year > 2005
})

console.log(newCar)
