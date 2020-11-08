let value = document.getElementById('moneytext');
let symb = "";
let sym = document.getElementById('sym');
let cfrom = document.querySelector('#cfrom');
let cto = document.querySelector('#cto');
let bruh = '';
let btn = document.getElementById("strtbtn");
//value.value = symb + "345";
function sign(){
    switch(cto.value){
        case value = "usdollar":
            bruh="$"; break;
        case value = 'cadollar':
            bruh="CA$"; break;
        case value = 'euro':
            bruh="E"; break;
        case value = 'pound':
            bruh="£"; break;
        case value = 'moroccan':
            bruh="Dh"; break;
        case value = 'yen':
            bruh="¥"; break;
        default:
            bruh="g"
    }
    return bruh
}
//let bruh = sign();
/*cto.addEventListener("change",sign());*/
cto.addEventListener("change",tst=()=>{
    //symb = cto.value;
    //sign();
    sym.innerHTML = sign();
    //symb = sign(cto.value);
    //value.innerHTML = bruh + "345";
});

btn.addEventListener("click",convert=()=>{
    let val = value.value;
    value.value = converter(value.value);
})
let val = value.value;
converter=(a)=>{
    let result = 0;
    if (cfrom.value =="cadollar"){
            if(cto.value == "usdollar"){
                result = eval(a * 3);
            }
            if(cto.value == "cadollar"){
                result = eval(a * 1);
            }
            else if(cto.value == "euro"){
                result = eval(a * 3)}
            else if(cto.value == "pound"){
                result = eval(a * 3)}
            else if(cto.value == "moroccan"){
                result = eval(a * 3)}
            else if(cto.value == "yen"){
                result = eval(a * 3)}
    }
    return result;
}