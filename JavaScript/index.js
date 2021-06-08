//Jordan Schulte
const appendDay = document.querySelector('.appendDay');
const appendDate = document.querySelector('.appendDate');
const appendTime = document.querySelector('.appendTime');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function clock(){
    const date = new Date();
    const dayNumber = date.getDay();
    let month = date.getMonth() + 1;
    let dayDate = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let prime = 'AM';

    if(hours >= 12){
        hours = hours - 12;
        prime = 'PM';
    }
    if(hours == 00){
        hours = 12;
    }

    hours = (hours > 9) ? hours : `0${hours}`;
    minutes = (minutes > 9) ? minutes : `0${minutes}`;
    seconds = (seconds > 9) ? seconds : `0${seconds}`;

    const time = `${hours}:${minutes}:${seconds} ${prime}`;
    appendTime.innerText = time;
    appendDay.innerText = days[dayNumber];
    appendDate.innerText = `${month}/${dayDate}/${year}`;

    console.log(hours);
};
clock();
setInterval(clock, 1000);