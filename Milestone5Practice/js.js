const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let count = 0
plusBtn.addEventListener("click", function(){
    count = count + 1;
    counter.innerText = count;

    if(count >=10){
        plusBtn.setAttribute("disabled", true);
    }
    else{
        plusBtn.removeAttribute("disabled", false);
    }

})

minusBtn.addEventListener("click", function(){
    count = count - 1;
    counter.innerText = count;
   
    if(count <= 0){
        minusBtn.setAttribute("disabled", true);
    }
    else{
        minusBtn.removeAttribute("disabled", false);
    }

})

