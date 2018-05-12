const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = seconds/60 * 360 + 90;
  const minutesDegrees = minutes/60 * 360 + 90;
  const hoursDegrees = hours/12 * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(secondsDegrees, minutesDegrees, hoursDegrees);
}
setInterval(setDate);
