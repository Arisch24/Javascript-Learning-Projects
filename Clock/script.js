let country = document.getElementById("country");
let today = document.getElementById("today");
let time = document.getElementById("time");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

/* my error here is that I didn't put the date object into the function so when the setInterval() function invokes the updateClock() function the date is reset and a new date is get from the date function */
function updateClock() {
    let date = new Date();
    time.textContent = `Current Time: ${date.toLocaleTimeString()}`;
    today.textContent = `Date: ${date.toLocaleDateString()} | ${date.toDateString()}`;
    seconds.textContent = date.getSeconds();
    minutes.textContent = date.getMinutes();
    hours.textContent = date.getHours();
}
setInterval(updateClock, 1000);
updateClock();