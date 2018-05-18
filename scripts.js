let intervalId = 0;

function countdown() {
    let mins = document.querySelector('.mins');
    let secs = document.querySelector('.secs');

    if(intervalId > 0) { return; }

    if(mins.value == 0 && secs.value == 0) { return; }

    intervalId = setInterval(() => {
        // Time's up
        if(mins.value == 0 && secs.value == 01) {
            clearInterval(intervalId);
            intervalId = 0;

            // Count tomatos
            const count = document.querySelector('.count');
            let counts = parseInt(count.value);
            counts += 1;
            count.value = counts;
            alert('Time\'s up');
        }

        // Countdown
        if(secs.value == 0) { // mins
            mins.value -= 1;
            if(mins.value < 10) { mins.value = "0" + mins.value; }
            secs.value = 59;
        } else { // secs
            secs.value -= 1;
            if(secs.value < 10) { secs.value = "0" + secs.value; }
        }
    }, 1000);
}

function stop() {
    clearInterval(intervalId);
    intervalId = 0;
}

function reset() {
    clearInterval(intervalId);
    intervalId = 0;

    document.querySelector('.mins').value = 25;
    document.querySelector('.secs').value = '00';
}

document.querySelector('.start').addEventListener('click', countdown);
document.querySelector('.stop').addEventListener('click', stop);
document.querySelector('.reset').addEventListener('click', reset);