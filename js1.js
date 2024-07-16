// var z = window.prompt("enter name:");
// document.write(typeof z);

// var a = [10,11,12,13,14];
// a.splice(2,2,20,21,22);             //splice(index,number of elements to be popped,list of elements to be added)
// console.log(a);

// var a = [10,11,12,13,14];
// var b=a.slice(2,5);
// console.log(b);


// var a = [1,2,3,4];
// for(var i=0;i<a.length;i++)
//     {
//         console.log(a[i]);
//     }
// a.map(ele => {
//     console.log(ele);
// })


// var x = new Date();
// console.log(x.getDate());
// console.log(x.getMonth());
// console.log(x.getFullYear());
// console.log(x.getDay());
// console.log(x.getHours());
// console.log(x.getSeconds());
// console.log(x.getMinutes());

// var y = x.getMonth()+1

// document.writeln(x.getDate()+"-"+(x.getMonth()+1)+"-"+x.getFullYear())
// document.writeln(x.getDate()+"-"+y+"-"+x.getFullYear())


// console.log(Math.round(4.3))   //nearest integer
// console.log(Math.ceil(3.2))    //highest near integer
// console.log(Math.floor(4.6))   //lowest near integer
// console.log(Math.trunc(11.2))  //removes all the decimal values and return only intege

// console.log(Math.random()*50); 

// console.log(Math.sqrt(25))
// console.log(Math.pow(2,5))
// console.log(Math.sign(-25))
// console.log(Math.sign(25))
// console.log(Math.max(2,5,6,4,2))
// console.log(Math.min(2,1,2,1,-1))

// function kalki(a=2,b=3,c=12){
//     console.log(a+b);
// }
// kalki(2,4)

// var x = {
//     name:"sravya",
//     roll:21,
//     Details: function(){
//         console.log("hai");
//     }
// }
// x.Details();

// x=10+1;
// console.log(x);  //hoeisting for var
// var x;

// x=10;
// console.log(x); //error(no hoiesting for let)
// let x;

// var x={
//     name:"sravya",
//     getname:function(){
//         // console.log(x.name) or
//         console.log(this.name);
//     }
// }
// x.getname()

//error
// try{
//     {
//         let x =0;
//     }
//     console.log(x);

// }
// catch(err){
//     console.log(err.name);   //console.log(err.message);
// }
// finally{
//     console.log("I will be printed even if error doesnt occur");
// }

// try{
//     var x = window.prompt("Enter name");
//     if(x==="Divya")
//         {
//             throw  "Divya";
//         }
// }
// catch(err){
//     console.log(err);
// }

try{
    er={
        name:"divya",
        message:"naak kuncham pichi"
    }
    console.log(er);
}

catch(err)
{
    console.log(err);
}
