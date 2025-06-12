    let remainingTime;
    let intervalId;
    let isPaused = false;

    const timer = document.getElementById('timecontainer');
    const pause = document.getElementById('pause');

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

    function stopTimer(){
        clearInterval(intervalId);
    }
    
    function updateTimer(minutes, seconds){
        seconds = seconds.toString().padStart(2,'0');
        timer.innerHTML = `${minutes}m ${seconds}s`;
    }


    document.getElementById("start").onclick = function(){
        remainingTime = Number(document.getElementById("timebox").value)  * 60;
        initialTime = remainingTime;
        startTimer();
    }

    document.getElementById("pause").onclick = function(){
        if(!isPaused){
            stopTimer();
            pause.innerHTML = "Resume";
            isPaused = true;
        }
        else{
            startTimer();
            pause.innerHTML = "Pause";
            isPaused = false;
        }
    }

    document.getElementById("reset").onclick = function(){
        clearInterval(intervalId);
        isPaused = false;

        let minutes = Math.floor(initialTime/60); 
        let seconds = initialTime % 60;
        updateTimer(minutes, seconds);
    }