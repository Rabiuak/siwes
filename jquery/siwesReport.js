//========================== Menu ==========================
$(document).ready(function(){
    $(".menu").click(function(){
        $(".link ul").toggle('slow');
    })
})

//========================== Report ==========================
//-------------- Next --------------
$(document).ready(function(){
    $(".next2").click(function(){
        $(".reportweek1, .reportweek3, .reportweek4").hide();
        $(".reportweek2").show('slow');
    });
    $(".next3").click(function(){
        $(".reportweek1, .reportweek2, .reportweek4").hide();
        $(".reportweek3").show('slow');
    });
    $(".next4").click(function(){
        $(".reportweek1, .reportweek2, .reportweek3").hide();
        $(".reportweek4").show('slow');
    });

     //-------------- Prev --------------
     $(".prev1").click(function(){
        $(".reportweek2, .reportweek3, .reportweek4").hide();
        $(".reportweek1").show('slow');
    });
    $(".prev2").click(function(){
        $(".reportweek1, .reportweek3, .reportweek4").hide();
        $(".reportweek2").show('slow');
    });
    $(".prev3").click(function(){
        $(".reportweek1, .reportweek2, .reportweek4").hide();
        $(".reportweek3").show('slow');
    });
    
})

