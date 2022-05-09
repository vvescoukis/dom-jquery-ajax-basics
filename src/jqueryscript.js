$(document).ready(function() {

    $("#coolButton_jQ").click(function() {
        $("#intro_jQ").css("backgroundColor",  'green');
    });

    $("#geekyButton_jQ").click(function() {
        $("#intro_jQ").css("backgroundColor", "pink");
    });

    $("#bordersButton_jQ").click(function() {
        if($("h3").css("border") === "0px none rgb(0, 0, 0)")
            $("h3").css("border","1px solid red");
        else
            $("h3").css("border","none");

    });

});
