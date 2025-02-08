const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let sum = 0;


function updateValue(value){
    sum = sum + value;
    counter.innerText = sum;
    if(sum >=10){
        plusBtn.setAttribute('disabled', true);
    }
    else{
        plusBtn.removeAttribute('disabled', false);
    }

    //Minus code


    if(sum <= 0){
        minusBtn.setAttribute('disabled', true);
    }
    else{
        minusBtn.removeAttribute('disabled', false);
    }

}





plusBtn.addEventListener("click", function(){
  updateValue(1);
})

minusBtn.addEventListener("click", function(){
    updateValue(-1);
})