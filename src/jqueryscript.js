$(document).ready(function() {
    // $("#coolButton").html("cool");

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


// let button1 = document.getElementById('coolButton');
// button1.addEventListener('click', () => {
//     document.getElementById('intro').style.backgroundColor = 'green';
// })

// let button2 = document.getElementById('geekyButton');
// button2.addEventListener('click', () => {
//     document.getElementById('intro').style.backgroundColor = 'pink';
// })

// let button3 = document.getElementById('bordersButton');
// button3.addEventListener('click', () => {
//     const level3 = document.querySelectorAll('h3');
//     level3.forEach(item => {
//         if (item.style.border === '1px solid green')
//             item.style.border = 'none';
//         else
//             item.style.border = '1px solid green';
//     });
// })
