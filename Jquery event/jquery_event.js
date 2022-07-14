$(document).ready(function(){
    $("#i1").focus(function(){
        $("#i1").css("background-color","yellow");
    });
    $("#i2").blur(function(){
        $("#i2").css("background-color","yellow");
    });
    i=0;
    $("#i3").keypress(function(){
        $("#i3").keypress(function(){
            $("span").text(i += 1);
          });
    });
    $("#i4").keyup(function(){
        $("#i4").css("background-color","yellow");
    });
    $("#i4").keydown(function(){
        $("#i4").css("background-color","red");
    });

});