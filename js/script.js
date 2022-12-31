function increase(){
    var number;
     number = document.getElementById('count').value;

     if(number<11)
     number= parseInt(number)  + 1;

     if(number==11)
     number = 0;


     document.getElementById('count').value = number;
 }


 function decrease(){
    var number;
     number = document.getElementById('count').value;

     if(number>-1)
     number= parseInt(number)  - 1;

     if(number==-1)
     number=10;

     document.getElementById('count').value = number;
 }