console.log("Hello");

function add () {
var a = parseInt(document.getElementById('input1').value)
var b = parseInt(document.getElementById('input2').value)
var sum = a + b

document.getElementById('out').value = sum
document.getElementById('input1').value = "";
document.getElementById('input2').value = "";

console.log(sum);
}
