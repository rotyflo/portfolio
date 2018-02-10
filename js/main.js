$(document).ready(function() {
    $(".about-link").click(function() {
        $("#about").show();
        $("#portfolio").hide();
        $("#contact").hide();

        $(".about-link").addClass("active");
        $(".portfolio-link").removeClass("active");
        $(".contact-link").removeClass("active");
    });
    
    $(".portfolio-link").click(function() {
        $("#about").hide();
        $("#portfolio").show();
        $("#contact").hide();

        $(".about-link").removeClass("active");
        $(".portfolio-link").addClass("active");
        $(".contact-link").removeClass("active");
    });
    
    $(".contact-link").click(function() {
        $("#about").hide();
        $("#portfolio").hide();
        $("#contact").show();

        $(".about-link").removeClass("active");
        $(".portfolio-link").removeClass("active");
        $(".contact-link").addClass("active");
    });
});