var shoppingCart = [
    {
        item: 'apples',
        cost: 2
    },
    {
        item: 'oranges',
        cost: 5
    },
    {
        item: 'eggs',
        cost: 10
    },
    {
        item: 'snickers',
        cost: 2.5
    },
    {
        item: 'bread',
        cost: 2.33
    },
    {
        item: 'cheese',
        cost: 4.33
    }
]

function total(arr) {
  return shoppingTotal = arr.reduce(function(final, item){
    return final += item.cost
  }, 0)
  return shoppingTotal;
}
console.log(total(shoppingCart))
