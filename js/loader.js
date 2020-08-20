$(document).ready(function(){
    $('.modal').modal();
    $('.parallex').parallex();
});

function toggleModal(){
    var instance= M.Modal.getInstance($('#modal3'))
    instance.open();
}