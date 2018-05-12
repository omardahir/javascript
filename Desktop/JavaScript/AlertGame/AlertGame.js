alert("Welcome warrior, we need you to save the world.");
var name = prompt("I've never seen you around here, what is your name?");
var race = prompt("Nice to meet you" +" " + name + ", Are you an Saiyan, Android, or a Namekian");
alert("A very dangerous man has appeared and is planing to destroy the earth!!");
alert(name + " " + "since you're a" + " " + race + "," + " " + "We think you can handle this problem");
var choice = prompt("Will you Fight, Negotiate, or Run");

var randomNumber = Math.round(Math.random());


if (race === "Namekian" && choice ==="Fight"){
  alert("Are you sure, Namekians arent good fighters but you can try.")
  alert("You were no match for him, he destroyed the world.");
}
else if(race === "Saiyan" & choice === "Fight"){
  alert("Good choice, Saiyan are the best fighters around.")
  alert("You uterly destroyed him, good job!!!")
}

else if (race === "Android" && choice === "Fight" && randomNumber > .5) {
  alert("Androds are good fighters, but i dont think you're a match for him.");
   alert("You were no match for him, he destroyed the world.");
 }
 else if(choice === "Fight" && randomNumber < 1) {
   alert("Androds are good fighters, but i dont think you're a match for him.");
   alert("You managed to catch him off gaurd and won the battle. You saved the world Warrior.");
 }

if(choice === "Run"){
 alert("Oh no, He destroyed the world. Game Over");
}

if(race === "Namekian"&& choice === "Negotiate"){
  alert("Good choie!" + " " + race + "'s" + " " + "are really good with words.");
  alert("You managed to convince him to leave the planet, Way to go!!");
}
  else if(race === "Android","Saiyan" && choice === "Negotiate"){
    alert("Are you sure?" + " " + race + "'s" + " " + "Aren't known for their negotiating skills.");
    alert("You got him even more pissed and he destroyed the universe");
  }
