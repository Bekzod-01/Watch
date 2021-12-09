 function timeShower(){
    var timeNow = new Date();

    document.querySelector(".hour").textContent =timeNow.getHours();
    document.querySelector(".minute").textContent =timeNow.getMinutes();
    document.querySelector(".seconds").textContent =timeNow.getSeconds();
 }

 timeShower();


 setInterval(function(){
    timeShower();
 } , 1000)