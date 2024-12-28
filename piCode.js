var numberRight = 0;
var numberWrong = 0; 

function checkPi(){
    var input = document.getElementById("pi_input").value;
    var output = document.getElementById("output"); 
    const piDigits =[1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9,6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6];

 var i = input.length - 1; 
 if (input[i] == piDigits[i]){
    numberRight ++;
 }
 else {
    numberWrong ++; 
 }
 if (numberWrong == 5){
    reset()
  }
 else if (numberRight == 1)  
 output.textContent = "You have gotten " + numberWrong + " digit wrong";
 else if (numberRight == 200 && numberWrong ==0)
 output.textContent = "You won!";
 else 
  output.textContent = "You have gotten " + numberWrong + " digits wrong";
}

function reset(){
    var input = document.getElementById("pi_input");
    var output = document.getElementById("output");
    output.textContent = "You Lost!";
    input.value = "";
    numberRight = 0;
    numberWrong = 0;
}