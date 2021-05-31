
$(document).ready(function(){
    $(".guess_box").click (function(){
        // $(".guess_box p").remove();
       var num = getRandom(5);
        var discount_msg = "<p>Your Discount is " + discount + "%</p>";
        // alert(discount);  
        $(this).append(discount_msg);   
        // $(this).css("border-color", "red");   
        $(".guess_box").each(function() {
            $(this).unbind("click");
        });            
    });             
});

function getRandom(num) {
     return Math.floor((Math.random() * num));
}