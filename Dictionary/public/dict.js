'use strict';

$(document).ready(function() {       
    $('#search').click(() => {
        var term = $('#term').val();
        
        $.post('/')
            .done(() => {
                //display content in page
                alert(`term: ${term} success`);
            })
            .fail(() => alert("error"))
            .always(() => $('#loader').hide());

        $('#loader').show();
    });

    //
});