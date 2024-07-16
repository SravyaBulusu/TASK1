var data={
    firstname:"",
    secondname:"",
    today:"",
    fathername:"",
    mothername:"",
    address:"",
    female:"",
    male:"",
    certi:"",
    skill:"",
    hobbi:"",
    badge:"",
    des:""
    // select:""
}

function firstname(event){
    data.firstname=event.target.value;
}
function secondname(event){
    data.secondname=event.target.value;
}
function today(event){
    data.today=event.target.value;
}
function fathername(event){
    data.fathername=event.target.value;
}
function mothername(event){
    data.mothername=event.target.value;
}
function address(event){
    data.address=event.target.value;
}
function male(event){
    data.male=event.target.value;
}
function female(event){
    data.female=event.target.value;
}
function certi(event){
    data.certi=event.target.value;
}
function skill(event){
    data.skill=event.target.value;
}
function hobbi(event){
    data.hobbi=event.target.value;
}
function badge(event){
    data.badge=event.target.value;
}
function des(event){
    data.des=event.target.value;
}
function submit(e){
    e.preventDefault();
    console.log(data);

}