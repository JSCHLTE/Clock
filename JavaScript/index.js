//Jordan Schulte
const appendTime = document.querySelector('.appendTime');

function clock(){
    const newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let prime = 'AM';

    if(hours > 12){
        hours = hours - 12;
        prime = 'PM';
    }

    hours = (hours > 9) ? hours : `0${hours}`;
    minutes = (minutes > 9) ? minutes : `0${minutes}`; //Makes the clock double 0
    seconds = (seconds > 9) ? seconds : `0${seconds}`;

    const time = `${hours}:${minutes}:${seconds} ${prime}`;

    appendTime.innerText = time;
};
clock();
setInterval(clock, 1000);