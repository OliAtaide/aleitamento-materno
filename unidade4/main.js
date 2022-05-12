// document.getElementById("guia-1").addEventListener("click", function( event ) {
//     console.log("clique");

// }, false);
$( document ).ready(function() {
    
    $('#guia-1').on('click', function(e) {
        $('#event-2').removeClass("event-border");
        $('#texto-2').removeClass("text-show");

        $('#event-3').removeClass("event-border");
        $('#texto-3').removeClass("text-show");

        $('#event-4').removeClass("event-border");
        $('#texto-4').removeClass("text-show");

        $('#event-5').removeClass("event-border");
        $('#texto-5').removeClass("text-show");

        $('#event-6').removeClass("event-border");
        $('#texto-6').removeClass("text-show");

        $('#event-1').toggleClass("event-border"); 
        $('#texto-1').toggleClass("text-show"); 
        e.preventDefault();
    });
    $('#guia-2').on('click', function(e) {

        $('#event-1').removeClass("event-border");
        $('#texto-1').removeClass("text-show");
        
        $('#event-3').removeClass("event-border");
        $('#texto-3').removeClass("text-show");
        
        $('#event-4').removeClass("event-border");
        $('#texto-4').removeClass("text-show");
        
        $('#event-5').removeClass("event-border");
        $('#texto-5').removeClass("text-show");
        
        $('#event-6').removeClass("event-border");
        $('#texto-6').removeClass("text-show");

        $('#event-2').toggleClass("event-border");
        $('#texto-2').toggleClass("text-show");
        
        e.preventDefault();
    });
    $('#guia-3').on('click', function(e) {

        $('#event-1').removeClass("event-border");
        $('#texto-1').removeClass("text-show");
        
        $('#event-2').removeClass("event-border");
        $('#texto-2').removeClass("text-show");
        
        $('#event-4').removeClass("event-border");
        $('#texto-4').removeClass("text-show");
        
        $('#event-5').removeClass("event-border");
        $('#texto-5').removeClass("text-show");
        
        $('#event-6').removeClass("event-border");
        $('#texto-6').removeClass("text-show");

        $('#event-3').toggleClass("event-border");
        $('#texto-3').toggleClass("text-show");
        
        e.preventDefault();
    });
    $('#guia-4').on('click', function(e) {

        $('#event-1').removeClass("event-border");
        $('#texto-1').removeClass("text-show");
        
        $('#event-3').removeClass("event-border");
        $('#texto-3').removeClass("text-show");
        
        $('#event-2').removeClass("event-border");
        $('#texto-2').removeClass("text-show");
        
        $('#event-5').removeClass("event-border");
        $('#texto-5').removeClass("text-show");
        
        $('#event-6').removeClass("event-border");
        $('#texto-6').removeClass("text-show");

        $('#event-4').toggleClass("event-border");
        $('#texto-4').toggleClass("text-show");
        
        e.preventDefault();
    });
    $('#guia-5').on('click', function(e) {

        $('#event-1').removeClass("event-border");
        $('#texto-1').removeClass("text-show");
        
        $('#event-3').removeClass("event-border");
        $('#texto-3').removeClass("text-show");
        
        $('#event-4').removeClass("event-border");
        $('#texto-4').removeClass("text-show");
        
        $('#event-2').removeClass("event-border");
        $('#texto-2').removeClass("text-show");
        
        $('#event-6').removeClass("event-border");
        $('#texto-6').removeClass("text-show");

        $('#event-5').toggleClass("event-border");
        $('#texto-5').toggleClass("text-show");
        
        e.preventDefault();
    });
    $('#guia-6').on('click', function(e) {

        $('#event-1').removeClass("event-border");
        $('#texto-1').removeClass("text-show");
        
        $('#event-3').removeClass("event-border");
        $('#texto-3').removeClass("text-show");
        
        $('#event-4').removeClass("event-border");
        $('#texto-4').removeClass("text-show");
        
        $('#event-5').removeClass("event-border");
        $('#texto-5').removeClass("text-show");
        
        $('#event-2').removeClass("event-border");
        $('#texto-2').removeClass("text-show");

        $('#event-6').toggleClass("event-border");
        $('#texto-6').toggleClass("text-show");
        
        e.preventDefault();
    });
});

$('')