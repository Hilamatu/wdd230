let temp = parseFloat(document.getElementById("temp"))
let speed = parseFloat(document.getElementById("speed"))

document.getElementById("windChill").innerHTML = windChillCalculator(temp, speed)

function windChillCalculator(temp, speed) {
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    windChill = Math.floor(windChill);
    return windChill
}