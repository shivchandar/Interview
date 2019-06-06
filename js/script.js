$(document).ready(function(){
    // Default Value
    $('#ammount').text('2500');
    $('#parties').text('20');
    $('#hours').text('60');
});

$(function () {
    $('#slider').slider({
        range: "min",
        min: 0,
        max: 11375,
        value: 2500,
        step: 125,
        slide: function (event, ui) {
            var amt = $("#slider").slider("value");
            $("#ammount").val(amt);
        }
    });

    $('#slider').on("slide", function () {
        // Get Slider Value
        var amt = $("#slider").slider("value");
        // Get Number of Parties
        var partie = amt / 125;
        // Get Hours
        var hour = partie * 3;
        // Print Amount Value
        $("#ammount").text(amt);
        // Print Number of Parties
        $("#parties").text(partie);
        // Print Number of Hours
        $("#hours").text(hour);

    });

});