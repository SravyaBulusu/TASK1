function generator(l){
    const ch="ABCDEFGHIJKLMNOPQRSTWUVXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&";
    let passwd="";
    for(var i=0;i<l;i++){
        var item=Math.floor(Math.random()*ch.length);
        console.log(item);
        passwd+=ch.charAt(item);
    }
    return passwd;
}
console.log(generator(10))