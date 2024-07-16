var n = parseInt(window.prompt("Enter countdown in hours"));
var sec = 0;
var min = 0;
var hr = n;
var mytimer = setInterval(fun, 1000);

function fun() {  
    if (sec === 0) {
        sec = 59;
        if (min === 0) {
            min = 59;
            if (hr > 0) {
                hr--;
            }
        } else {
            min--;
        }
    } else {
        sec--;
    }
    if(hr==0 && min==0 && sec==0){
        clearInterval(mytimer);
    }
    if(hr<10){
        document.getElementsByClassName("hours")[0].innerHTML = "0"+hr;
    }
    else{
        document.getElementsByClassName("hours")[0].innerHTML = hr;
    }
    // document.getElementsByClassName("hours")[0].innerHTML = "0"+hr;
    if(min<10){
        document.getElementsByClassName("minutes")[0].innerHTML = "0"+min;

    }
    else{
        document.getElementsByClassName("minutes")[0].innerHTML = min;

    }
    // document.getElementsByClassName("minutes")[0].innerHTML = "0"+min;
    if(sec<10){
        document.getElementsByClassName("seconds")[0].innerHTML = "0"+sec;

    }
    else{
        document.getElementsByClassName("seconds")[0].innerHTML = sec;

    }
    // document.getElementsByClassName("seconds")[0].innerHTML = "0"+sec;
}