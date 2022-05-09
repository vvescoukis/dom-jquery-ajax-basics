
$(document).ready(function() {

    $("#ajax3Button").click(function() {
        $.ajax({
            url: 'someLocalData.txt',
            type: 'GET',
            statusCode: {
                200: function () { console.log("GET completed successfully!"); }
            }
        }).done(function(response) {
            $("#ajax3Area").html(response);
        });

    });

    $("#ajax4Button").click(function() {
        $.ajax({
            url: 'http://localhost:3000/quizzes',
            type: 'GET',
        }).done(function(data) {
            $("#ajax4Area").html(JSON.stringify(data)); })

    });

});

