const deadpool = {
  fullName: "Wade Winston Willson",
  heightInInches: 70,
  superPowers: ['Accelorated Healing', 'Weapon X']
}
console.log('First name:', deadpool.fullName);
console.log('Super power 1:', deadpool.superPowers[0]);


const vacation = {
  description: "Tropical Island",
  stop1: "City",
  stop2: "Volcano",
  startDate: "May 2, 2018",
  endDate: "June 2, 2018"
}
const mySentense = "I went on a vacation to a " + vacation.description + " " + "on " + vacation.startDate + "." + " "
+ "We went to a " + vacation.stop1 + " " + ", then we went to the" + " " + vacation.stop2 + "." + " " + "We returned from our trip on"
+ " " + vacation.endDate + ".";
console.log(mySentense);
