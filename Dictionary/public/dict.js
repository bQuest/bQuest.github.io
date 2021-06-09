'use strict';

$(document).ready(function() {       
    $('#search').click(() => {
        var term = $('#term').val();
        alert(term);
        $.post('/')
            .done((entries) => {
                console.log(entries);
            })
            .fail(() => alert("error"))
            .always(() => $('#loader').hide());

        $('#loader').show();
    });

    //
});