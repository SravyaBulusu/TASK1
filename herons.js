// var a = window.prompt("enter a value:");
// var b = window.prompt("enter b value:");
// var c = window.prompt("enter c value:");
// var si=parseInt(a)+parseInt(b)+parseInt(c);
// var s=parseInt(si)/2;
// console.log(s);
// console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));

var a = window.prompt("enter a value:");
var b = window.prompt("enter b value:");
var c = window.prompt("enter c value:");
var ai=parseInt(a);
var bi=parseInt(b);
var ci=parseInt(c);
var dis=bi*bi-(4*ai*ci);

console.log(dis);
if(dis>0){
var root1=((-b+Math.sqrt(dis))/2*a);
var root2=((-b-Math.sqrt(dis))/2*a);
console.log(root1);
console.log(root2);
}
if(dis==0){
    var root=(-b)/2*a;
    console.log(root);
    console.log(root);
}
if(dis<0){
    
        console.log('Roots are complex'); 
        let sqrt_val = Math.sqrt(Math.abs(dis)); 
  
        console.log(-b / (2 * a) + " + i" + 
            sqrt_val / (2 * a) + " and " + 
            -b / (2 * a) + " - i" + sqrt_val) / (2 * a); 
    }