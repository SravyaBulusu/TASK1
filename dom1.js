console.log(document.getElementById("mydiv"));
console.log(document.getElementsByClassName("hello"));
// function fun(){
//     var x = document.getElementsByClassName("mydiv")[0];
//     x.style.backgroundColor="black"
// }

// function fun(){
//     var x = document.getElementsByClassName("img1")[0];
//     x.src="./images/image4.jpeg";
// }

function fun(){
    var x = document.getElementsByClassName("img2")[0];
    x.setAttribute("src","./images/image4.jpeg");
}

function fun(){
    var x = document.getElementsByClassName("mydiv")[0];
    x.setAttribute("style","height:400px");
}

function fun(){
    console.log(document.getElementsByClassName("mydiv")[0].innerHTML)
}

function fun(){
    var x = document.getElementsByClassName("mydiv")[0];
    x.innerHTML="second_div";
}

// function fun(){
//     var x = document.getElementsByClassName("myclass");
//     x.innerhtml="div";

//     var y = docu
// }