 let sum = 0;

 function clickbtn(){
    const count = document.getElementById('count');
    sum = sum+1;
    count.innerText = sum;
 }

 function clickme(){
    const count = document.getElementById('count');
    sum = sum -1;
    count.innerText =  sum;
 }