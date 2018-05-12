function leapYear() {
for (x=1; x<=2040; x++){
if (x%400 === 0) {
  console.log("is not a leap year " + x)
  }else if (x%4 === 0) {
    console.log("is a leap year " + x)

  }else if (x%100 === 0) {
    console.log("is a leap year" + x)

    }
  }
  var a = document.getElementById("input1").value
  if (a%400 === 0) {
    document.getElementById("answer").innerHTML = "Year " + a + " is not a leap year";
  }else if (a%4 === 0) {
    document.getElementById("answer").innerHTML = "Year " + a + " is a leap year";

    }else if (a%100 === 0) {
      document.getElementById("answer").innerHTML = "Year " + a + " is a leap year";

    }else {
      document.getElementById("answer").innerHTML = "Year " + a + " is not a leap year";
    }

}
