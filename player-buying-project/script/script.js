const btnAll = document.getElementsByClassName("btnAll");

for (const btn of btnAll) {
    btn.addEventListener('click', function (event) {

        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].innerText;
        btn.disabled = true;

        // Validation Budget, Count and Limit:


          if(getConvertedValue("budget") <0){
            alert("Your Budget is over!");
            return;
        }
          if(getConvertedValue("count") == 8){
            alert("You can't buy anymore!");
            return;
        }
          if(getConvertedValue("limit") == 0){
            alert("Your limit is over!");
            return;
        }

        //Budget Calculation
        const budget = getConvertedValue("budget");
        document.getElementById("budget").innerText = budget - parseInt(price);

        //Count Calculation
        const count = getConvertedValue("count");
        document.getElementById("count").innerText = count + 1;

    

        //Limit Calculation

        const limit = getConvertedValue("limit");
        document.getElementById("limit").innerText = limit-1;







        const selectedContainer = document.getElementById("selected-container");

        const div = document.createElement("div");
        div.classList.add('flex');
        div.classList.add('gap-8')


        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;


        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotal(price);
        updateGrandTotal();
       
    })
}

function updateGrandTotal(status) {
    let totalCost = getConvertedValue("total-cost");
    if(status == undefined){
      
        document.getElementById("grand-total").innerText = totalCost;
    }
    else{
       const couponCode = document.getElementById("Love420").value;
       if(couponCode === "Love420"){
        const discount = (totalCost*20)/100;
        let result = totalCost - discount;
        document.getElementById("grand-total").innerText = result;
       }
       else{
         alert("Provide a valid coupon code!");
       }

    }

}

function updateTotal(price) {
    let totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(price);
  
    document.getElementById("total-cost").innerText = sum;

}





function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}