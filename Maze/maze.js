$(document).ready(function(){
    //click start >> move the mouse through the maze >> reach end
    var mouseover = false;
    
    function losefn () {
        $(".boundary").addClass("youlose");
        mouseover = true;
    }
    
    function displayMsg(msg) {
        $("h2#status").text(msg);
    }

    $(".boundary").mouseover(losefn);

    $("#end").mouseenter(function () {
        if(!mouseover){
            displayMsg("You Win");
             alert("You win");
        }        
    });    

    $("#start").click(function() {
        //alert("you clicked start");
        $(".boundary").removeClass("youlose");
        displayMsg("You lose");
        mouseover = false;
    });

    $("#maze").mouseleave(losefn);

});