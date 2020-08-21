$(document).ready(function(){
    $(".modal").modal();
    $('.parallax').parallax();
    $(".sidenav").sidenav();
    $(".slider").slider({full_width :true}),
    $('.carousel').carousel()
});


function toggleModal(){
    var instance= M.Modal.getInstance($('#modal3'))
    instance.open();
}