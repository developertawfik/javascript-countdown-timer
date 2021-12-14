
const dayEL = document.getElementById('day')
const hoursEL = document.getElementById('hours')
const minsEL  = document.getElementById('mins')
const secoundEL = document.getElementById('secound')


const newYears = "5 feb 2022";

function coundown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecounds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecounds / 3600 / 24);

    const hours = Math.floor(totalSecounds / 3600) % 24;

    const minutes = Math.floor(totalSecounds / 60) % 60;

    const secounds = Math.floor(totalSecounds % 60);

    dayEL.innerHTML = days;
    minsEL.innerHTML = formatTime(minutes) ;
    hoursEL.innerHTML = formatTime(hours) ;
    secoundEL.innerHTML = formatTime(secounds);

    // console.log(days, hours, minutes, secounds);
}

function formatTime(time) { 
    return time < 10 ? `0${time}` : time;
 }

// intial call 
coundown()

setInterval(coundown, 1000)