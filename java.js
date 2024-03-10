$(document).ready(function(){
   $(".container").mouseover(function(){
    $(".card").stop().animate({
        top: "-90px"
    },"slow");
   }).mouseleave(function(){
    $(".card").stop().animate({
        top:0
    }, "slow");
   });
});