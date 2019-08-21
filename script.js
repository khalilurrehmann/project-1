$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
    if(position >= 200){
        $('.nav-menu').addClass('custom-navbar');
    }else{
        $('.nav-menu').removeClass('custom-navbar');
    }
    });
    /* Gallery Data-filter */
    $('.gallery-list-item').click(function(){
        let value=$(this).attr('data-filter');
        if(value==='all'){
            $('.filter').show(300);
        }else{
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }
        });
        $('.gallery-list-item').click(function(){
            $(this).addClass('active-item').siblings().removeClass('active-item');
        });
        $('.gallerys').magnificPopup({
            type:'image',
            delegate:'a',
            gallery:{
                enabled : true
            }
});
/*  Message counter */
$('textarea').keyup(function() {
    
    var characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count');
    
    current.text(characterCount);
});
/*  nav active */
$("#navAct").onePageNav({
	currentClass: 'nav-active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});
window.onload = (function() {
    setTimeout (function () {
    scrollTo(0,0);
    }); 
});

$(window).scroll(function()
{
    if($(this).scrollTop() > 100)
    {
        $('#btt').css("display", "block");
    }else
    {
        $('#btt').css("display", "none");
    }
});
});

