const display = document.getElementById("display");

function appendTodisplay(input){
    display.value += input
}


function clearDisplay(){
    display.value = "";
}


function calculate(){
    display.value = eval(display.value);
}

function DEL() {
    display.value = display.value.toString().slice(0,-1)
}