const upper_case = document.getElementById("upperCase");
const lower_case = document.getElementById("lowerCase");
const num = document.getElementById("Number");
const Symbol = document.getElementById("Symbol");
const passLength = document.getElementById("length")
const btn = document.getElementById("generate");
const output = document.getElementById("display");
const lowercase ="qwertyuiopasdfghjklzxcvbnm";
const uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "0987654321";
const symbols = "~`!@#$%^&*()_+{}:?/.';><";

output.disabled=true;
btn.onclick=click;
function click(){
    let result = "";
    let passlength = passLength.value;
    if (passlength<1){
        window.alert("Passlength less than 1 asn't allowed.");
    }
    let allowedChar="";
    let rand_index;
    
    if (upper_case.checked){
        allowedChar+=uppercase;
    }
    if (lower_case.checked){
        allowedChar+=lowercase;
    }
    if (num.checked){
        allowedChar+=numbers;
    }
    if (Symbol.checked){
        allowedChar+=symbols;
    }
    else if (!(upper_case.checked||lower_case.checked||num.checked||Symbol.checked)){
        window.alert("Select any one case");
        output.value=" ";
        return;
    }
    for (let i=0; i<passlength;i++){
        rand_index=Math.floor(Math.random()*allowedChar.length);
        result+=allowedChar[rand_index];
    output.value=result;
    }
}