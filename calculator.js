
function addToExpression(v){
    let onScreen = document.getElementById("result");
    onScreen.value += v;
}
function solve(){
    let equation = document.getElementById("result").value;
    let result = eval (equation);
    document.getElementById("result").value = result;
}
function clr(){
    document.getElementById("result").value= "";
}
function backspace(){
    let onScreen = document.getElementById("result").value;
    document.getElementById("result").value = onScreen.slice(0,onScreen.length-1);
}
document.onkeydown = function(event){
    var x = event.key;
    var operators = "+-*/";
    var numbers = "0123456789";
    if (operators.includes(x) || numbers.includes(x)){
        addToExpression(x);
    }
    else if (x == "Enter"){
        solve();}
    else if (x == "Backspace"){
        backspace();
    }
}
