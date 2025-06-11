    let remainingTime;
    let intervalId;

    const timer = document.getElementById('timecontainer');
    function startTimer(){
        clearInterval(intervalId);
        intervalId = setInterval(() => {
        var minutes = Math.floor(remainingTime/60); 
        var seconds = remainingTime % 60;
        updateTimer(minutes, seconds);

        remainingTime--;
        if(remainingTime < 0){
            clearInterval(intervalId);
        }
        }, 1000);
    }

    function updateTimer(minutes, seconds){
        seconds = seconds.toString().padStart(2,'0');
        timer.innerHTML = `${minutes}m ${seconds}s`;
    }
    document.getElementById("start").onclick = function(){
        remainingTime = Number(document.getElementById("timebox").value)  * 60;
        startTimer();
    }