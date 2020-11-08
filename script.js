let value = document.getElementById('moneytext');
let symb = "";
let sym = document.getElementById('sym');
let cfrom = document.querySelector('#cfrom');
let cto = document.querySelector('#cto');
let bruh = '';
let btn = document.getElementById("strtbtn");
//value.value = symb + "345";
function sign(){
    switch(symb){
        case value = "usdollar":
            bruh="$";alert("dlr"); break;
        case value = 'cadollar':
            bruh="CA$"; break;
        case value = 'euro':
            bruh="$"; break;
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
    symb = cto.value;
    sign();
    sym.innerHTML = bruh;
    //symb = sign(cto.value);
    //value.innerHTML = bruh + "345";
});

btn.addEventListener("click",convert=()=>{
    value.value = converter(value.value);
})

converter=(a)=>{
    let result = 0;
    if (cfrom.value =="cadollar"){
        switch(cto.value){
            case value = "usdollar":
                result = eval(a * 3); break;
            case value = 'cadollar':
                result = eval(a * 3); break;
            case value = 'euro':
                result = eval(a * 3); break;
            case value = 'pound':
                result = eval(a * 3); break;
            case value = 'moroccan':
                result = eval(a * 3); break;
            case value = 'yen':
                result = eval(a * 3); break;
            default:
                result = eval(a * 3);
        }
    }
    if (cfrom.value =="usdollar"){
        switch(cto.value){
            case value = "usdollar":
                result = eval(a * 3); break;
            case value = 'cadollar':
                result = eval(a * 3); break;
            case value = 'euro':
                result = eval(a * 3); break;
            case value = 'pound':
                result = eval(a * 3); break;
            case value = 'moroccan':
                result = eval(a * 3); break;
            case value = 'yen':
                result = eval(a * 3); break;
            default:
                result = eval(a * 3);
        }
    }
    if (cfrom.value =="pound"){
        switch(cto.value){
            case value = "usdollar":
                result = eval(a * 3); break;
            case value = 'cadollar':
                result = eval(a * 3); break;
            case value = 'euro':
                result = eval(a * 3); break;
            case value = 'pound':
                result = eval(a * 3); break;
            case value = 'moroccan':
                result = eval(a * 3); break;
            case value = 'yen':
                result = eval(a * 3); break;
            default:
                result = eval(a * 3);
        }
    }
    if (cfrom.value =="yen"){
        switch(cto.value){
            case value = "usdollar":
                result = eval(a * 3); break;
            case value = 'cadollar':
                result = eval(a * 3); break;
            case value = 'euro':
                result = eval(a * 3); break;
            case value = 'pound':
                result = eval(a * 3); break;
            case value = 'moroccan':
                result = eval(a * 3); break;
            case value = 'yen':
                result = eval(a * 3); break;
            default:
                result = eval(a * 3);
        }
    }
    return result;
}