// function fun(){
//     var x =  document.getElementsByClassName("hours")[0];
//     x.innerHTML=0;
//     x++;
//     console.log(x);
// }
// setInterval(fun,1000);

var c = 0;
var m=0;
var h=0;

function fun(){
    myTimer = setInterval(myClock, 1000);
        // var c = 0;
        // var m=0;
        // var h=0;

        function myClock() {
            // document.getElementsByClassName("seconds")[0].innerHTML = "0"+c++;
            if(c<10){
                document.getElementsByClassName("seconds")[0].innerHTML = "0"+ ++c;
            }
            else{
                document.getElementsByClassName("seconds")[0].innerHTML = ++c;
            }
               if (c == 61) {
                   c=0;
                   if(m<9){
                    document.getElementsByClassName("minutes")[0].innerHTML="0"+ ++m;
                   }
                   else{
                    document.getElementsByClassName("minutes")[0].innerHTML=++m;
                   }
                //    document.getElementsByClassName("minutes")[0].innerHTML=++m;
                   if(m==60){
                        m=0;
                        if(h<9){
                            document.getElementsByClassName("hours")[0].innerHTML="0"+ ++h;
                        }
                        else{
                            document.getElementsByClassName("hours")[0].innerHTML=++h;
                        }
                        // document.getElementsByClassName("hours")[0].innerHTML=++h;
                   }
        }
    }
}
function fun2(){
    clearInterval(myTimer);
}
function fun3(){
    clearInterval(myTimer);
    document.getElementsByClassName("seconds")[0].innerHTML = "00";
    document.getElementsByClassName("minutes")[0].innerHTML = "00";
    document.getElementsByClassName("hours")[0].innerHTML = "00";
    c=0;
    m=0;
    h=0;
    
}
