$(document).ready(function() {
    $("#about-link").click(function() {
        $("#about").show();
        $("#projects").hide();
        $("#contact").hide();

        $("#about-link").addClass("active");
        $("#projects-link").removeClass("active");
        $("#contact-link").removeClass("active");
    });
    
    $("#projects-link").click(function() {
        $("#about").hide();
        $("#projects").show();
        $("#contact").hide();

        $("#about-link").removeClass("active");
        $("#projects-link").addClass("active");
        $("#contact-link").removeClass("active");
    });
    
    $("#contact-link").click(function() {
        $("#about").hide();
        $("#projects").hide();
        $("#contact").show();

        $("#about-link").removeClass("active");
        $("#projects-link").removeClass("active");
        $("#contact-link").addClass("active");
    });
});