let intervalId = 0;

function countdown() {
    const mins = document.querySelector('.mins');
    const secs = document.querySelector('.secs');
    const title = document.querySelector('title');

    if(intervalId > 0) { return; }

    if(mins.value == 0 && secs.value == 0) { return; }

    intervalId = setInterval(() => {
        // Time's up
        if(mins.value == 0 && secs.value == 01) {
            clearInterval(intervalId);
            intervalId = 0;

            // Count tomatos
            document.querySelector('.harvest').innerHTML
                += `<div><img src="img/tomato.png" alt="Tomato juice Cartoon Clip art - Creative tomatoes @kisspng"></div>`;
        }

        // Countdown
        if(secs.value == 0) { // mins
            mins.value -= 1;
            if(mins.value < 10) { mins.value = '0' + mins.value; }
            secs.value = 59;
            title.innerHTML = `Tomato Clock ${mins.value}:${secs.value}`;
        } else { // secs
            secs.value -= 1;
            if(secs.value < 10) { secs.value = '0' + secs.value; }
            title.innerHTML = `Tomato Clock ${mins.value}:${secs.value}`;
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

    document.querySelector('.mins').value = '25';
    document.querySelector('.secs').value = '00';

    document.querySelector('title').innerHTML 
        = 'Tomato Clock 25:00';
}

document.querySelector('.start').addEventListener('click', countdown);
document.querySelector('.stop').addEventListener('click', stop);
document.querySelector('.reset').addEventListener('click', reset);