$(document).ready(function(){
    //click start >> move the mouse through the maze >> reach end
    var mouseover = false;
    $(".boundary").mouseover(function(){
        $(".boundary").addClass("youlose");
        mouseover = true;
    });

    displayWin();    
    function displayWin(){
        if(mouseover){
            $("#end").mouseenter(function(){
                alert("You win!");
            });
        }
        
    }   

    

    $("#start").click(function() {
        //alert("you clicked start");
        $(".boundary").removeClass("youlose");
        mouseover = false;
    });

});