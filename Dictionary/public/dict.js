'use strict';

$(document).ready(function() {       
    $('#search').click(() => {
        var term = $('#term').val();

        $.ajax({
            url : '/',
            method: 'POST',
            contentType : 'application/json',
            data: JSON.stringify({ word: $('#term').val() }),
            success : function(response) { 
                alert('hi')   ;
                
               response.words.forEach(element => {
                   $('#result').html(`<ol><li>${element}</li></ol>`);
               });
            },
            fail : () => alert('failed')
        });
    });

    //
});