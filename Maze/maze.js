$(document).ready(function(){
    //click start >> move the mouse through the maze >> reach end
    var mouseover = false;
    var initialmsg = $("h2#status").html();
    
    function losefn () {
        $(".boundary").addClass("youlose");
        displayMsg("You Lose")
        mouseover = true;
    }
    
    function displayMsg(msg) {
        $("h2#status").text(msg);
    }

    $(".boundary").mouseover(losefn);

    $("#end").mouseenter(function () {
        if(!mouseover){
            displayMsg("You Win");
            //  alert("You win");
        }        
    });    

    $("#start").click(function() {
        //alert("you clicked start");
        $(".boundary").removeClass("youlose");
        displayMsg("You lose");
        mouseover = false;
        $("h2#status").html(initialmsg);
    });

    $("#maze").mouseleave(losefn);

});