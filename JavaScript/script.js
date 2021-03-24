loadTime = () =>{
setTimeout(loadTime, 1000);
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = "PM";

    if(hours == 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
    }

    hours = (hours < 10) ? "0" + hours: hours;
    minutes = (minutes < 10) ? "0" + minutes: minutes;
    seconds = (seconds < 10) ? "0" + seconds: seconds;


    time = `${hours} : ${minutes} : ${seconds} | ${meridiem}`
    document.querySelector("#myTime").innerText = time;
};

loadTime();