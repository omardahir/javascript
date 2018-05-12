function fizzbuzz (x) {
  //var x = document.getElementById("input1").value
for(x=1; x<=100; x++){

  if (x%3 === 0 && x%5 === 0) {
    console.log("fizzbuzz "+ x)
    //document.getElementById("answer").innerHTML = "fizzbuzz";
  }
  else if (x%3 === 0) {
    console.log("fizz "+ x)
    //document.getElementById("answer").innerHTML = "fizz";
  }
else if (x%5 === 0) {
  console.log("buzz "+ x)
  //document.getElementById("answer").innerHTML = "buzz";
}
else {
  console.log(x)
  }
  }
}
