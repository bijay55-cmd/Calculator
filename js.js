
//calculator operations
let prev = "";
let newval = "";
let result = "";
let mathoperator = "";
let decimalClicked = false;


function myFunction(val){
    if(result){
        newval = val;
        result = "";
    }else{
        if(val === '.'){
        if(decimalClicked !=true){
            newval +=val;
            decimalClicked = true;
        }
    }else{
        newval += val;
    }
}
document.getElementById('display').innerHTML += val;
}


   
function operation(op){
    if(!result){
        prev = newval;

    }else{
        prev = result;
    }
    newval = "";
    mathoperator = op;
    decimalClicked = false;
    result = "";
    document.getElementById('display').innerHTML = "";
}

function equal(){
    decimalClicked = false;
    prev = parseFloat(prev);
    newval = parseFloat(newval);

    if(mathoperator === '+'){
        result = prev + newval;
    }
    else if(mathoperator === '-'){
        result = prev - newval;
    }
    else if(mathoperator === '/'){
        result = prev / newval;
    }
    else if(mathoperator === '%'){
        result = prev % newval;
    }
    else if(mathoperator === '*'){
        result = prev * newval;
    }
    else{
        prev = newval;
    }
    document.getElementById('display').innerHTML = result;
}

function clr (){
    document.getElementById('display').innerHTML = ""; 
}

function back(){
    var value = document.querySelector('#display').innerText;
    document.querySelector('#display').innerText = value.substr(0, value.length -1);
}

//toggle switch
var buttons = document.querySelector('.switch-toggle');

buttons.addEventListener('click', e => {

    if(e.target.className == "dark"){
        document.body.style.background ="hsl(222, 26%, 31%)";
        document.body.style.color ="white"; 
        document.querySelector('#display').style.background="hsl(224, 36%, 15%)";
        document.querySelector('#display').style.color="white";
        document.querySelector('.calc').style.background="hsl(224, 36%, 15%)";

        var keypad = document.querySelectorAll('.btn');


    for(var i=0; i<keypad.length; i++){
        keypad[i].style.background="hsl(45, 7%, 89%)";
        keypad[i].style.boxShadow="inset 0px -3px 0px  hsl(35, 11%, 61%)";
        keypad[i].style.color ="black";
    }
    

    }

    else if(e.target.className == "white"){
        document.body.style.background=" hsl(0, 0%, 90%)";
        document.body.style.color ="black";
        document.querySelector('.calc').style.background="hsl(0, 5%, 81%)";
        document.getElementById('display').style.background="hsl(0, 0%, 93%)"; 
    
        var keypad = document.querySelectorAll('.btn');


        for(var i=0; i<keypad.length; i++){
            keypad[i].style.background="whitesmoke";
            keypad[i].style.boxShadow="inset 0px -3px 0px  hsl(35, 11%, 61%)";
            keypad[i].style.color ="black";
        }
        }
    
    else if(e.target.className == "purple"){
        document.body.style.background=" hsl(268, 75%, 9%)";
        document.getElementById('display').style.background="hsl(268, 71%, 12%)";
        document.body.style.color ="hsl(52, 100%, 62%)";
        document.querySelector('.calc').style.background="hsl(268, 71%, 12%)";
    

    var keypad = document.querySelectorAll('.btn');


    for(var i=0; i<keypad.length; i++){
        keypad[i].style.background="hsl(281, 89%, 26%)";
        keypad[i].style.boxShadow="inset 0px -3px 0px  hsl(285, 91%, 52%)";
        keypad[i].style.color ="yellow";
    }
    }
})
