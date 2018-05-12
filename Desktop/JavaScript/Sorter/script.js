
var list = []

console.log(list);
function  Sorter(){
  list[0] = document.getElementById('1').value
  list[1] = document.getElementById('2').value
  list[2] = document.getElementById('3').value
  var sorted = list.sort()
  document.getElementById('1').value = list[0]
  document.getElementById('2').value = list[1]
  document.getElementById('3').value = list[2]
}
