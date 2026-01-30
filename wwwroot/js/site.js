// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// JavaScript code using JQuery that does the needed functions of the form on the Pricing.cshtml page.
// JavaScript code using jQuery for Pricing.cshtml form
$(document).ready(function() {
    $("#calculateButton").click(function() {
        // Get number of hours
        var hours = parseFloat($("#hours").val());
        // Get rate (remove $)
        var rate = parseFloat($("#rate").val().replace("$", ""));

        // Validate inputs: must be numbers and non-negative
        if (!isNaN(hours) && !isNaN(rate) && hours >= 0 && rate >= 0) {
            var total = hours * rate;
            $("#total").val("$" + total.toFixed(2));
        } else {
            $("#total").val("Invalid input");
        }
    });
});