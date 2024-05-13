const display = document.getElementById("outputTime");
let seconds = parseInt(0),
    minutes = parseInt(0),
    hours = parseInt(0),
    time = 0,
    intervalo;

display.innerText = '00:00:00';

function setTwentyFive(){
    time += 1500;
    hours = Math.floor(time/3600);
    minutes = Math.floor(time/60 - (hours*60));
    seconds = time%60;
    display.value = time;
    display.innerText = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

function setTen(){
    time += 600;
    hours = Math.floor(time/3600);
    minutes = Math.floor(time/60 - (hours*60));
    seconds = time%60;
    display.value = time;
    display.innerText = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

function setFive(){
    time += 300;
    hours = Math.floor(time/3600);
    minutes = Math.floor(time/60 - (hours*60));
    seconds = time%60;
    display.value = time;
    display.innerText = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

function setSeconds(){
    time += 10;
    hours = Math.floor(time/3600);
    minutes = Math.floor(time/60 - (hours*60));
    seconds = time%60;
    display.value = time;
    display.innerText = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

function zeroTime(){
    time = 0;
    hours = Math.floor(time/3600);
    minutes = Math.floor(time/60 - (hours*60));
    seconds = time%60;
    display.value = time;
    display.innerText = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
}

function regressiveCount(){
    time -= 1;
    hours = Math.floor(time/3600);
    minutes = Math.floor(time/60 - (hours*60));
    seconds = time%60;
    display.value = time;
    display.innerText = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    if(time < 0){
        time = 0;
        display.innerText = `00:00:00`;
        clearInterval(intervalo)
        alert("The time is over!");
    }
}

function startTimer(){
    if(time === 0){
        alert("INSERT THE TIME");
    } else {
        intervalo = setInterval(regressiveCount, 1000);
    }
}

function stopTimer(){
    clearInterval(intervalo)
}