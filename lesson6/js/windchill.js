let temp = parseInt(document.querySelector('#temp').innerHTML);
let speed = parseInt(document.querySelector('#speed').innerHTML);

let windChill;
if (temp <= 50 && speed >= 3) {
  windChill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(0);
}

else {
  windChill = "N/A";
}

document.querySelector('#windChill').textContent = windChill;