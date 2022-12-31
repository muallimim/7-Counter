function increase(){
    var number;
     number = document.getElementById('count').value;
     number= parseInt(number)  + 1;
     document.getElementById('count').value = number;
 }


 function decrease(){
    var number;
     number = document.getElementById('count').value;
     number= parseInt(number)  - 1;
     document.getElementById('count').value = number;
 }