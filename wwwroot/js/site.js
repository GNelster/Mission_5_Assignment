// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// JavaScript code using JQuery that does the needed functions of the form on the Pricing.cshtml page.
$(document).ready(function() {
    $("#calculateButton").click(function() {
        // Get number of hours
        var hours = parseFloat($("#hours").val());
        // Get rate (remove $)
        var rate = parseFloat($("#rate").val().replace("$", ""));

        if (!isNaN(hours) && !isNaN(rate)) {
            var total = hours * rate;
            $("#total").val("$" + total.toFixed(2));
        } else {
            $("#total").val("Invalid input");
        }
    });
});