const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let t = null;

let h = 0;
let m = 0;
let s = 0;

function displayTime(){

    const hh = String(h).padStart(2,"0");
    const mm = String(m).padStart(2,"0");
    const ss = String(s).padStart(2,"0");

    timer.textContent = `${hh}:${mm}:${ss}`;

}

displayTime();

start.addEventListener("click",()=>{

    if(t!==null) return;

    start.textContent="Running...";

    t=setInterval(()=>{

        s++;

        if(s===60){

            s=0;
            m++;

        }

        if(m===60){

            m=0;
            h++;

        }

        displayTime();

    },1000);

});

stop.addEventListener("click",()=>{

    clearInterval(t);

    t=null;

    start.textContent="Resume";

});

reset.addEventListener("click",()=>{

    clearInterval(t);

    t=null;

    h=0;
    m=0;
    s=0;

    displayTime();

    start.textContent="Start";

});