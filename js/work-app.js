$(document).ready(function() {

    $(".button-home").click(function(event) {
        //var goTop = 300;
        event.preventDefault();
        var goTop = $(".splash").offset().top;
        // console.log($(".projects").offset().top );
        $("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

    });

     $(".button-works").click(function(event) {
        //var goTop = 300;
        // event.preventDefault();
        var goTop = $(".works").offset().top;
        // console.log($(".projects").offset().top );
        $("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

    });

  });