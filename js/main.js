
$('.menu_respp').click(function(){
    $(this).toggleClass('actv');
    $('.cntrl_spc_menu').slideToggle();
});


var ancho = $(window).width();


$(window).on("scroll", function() {
    function paralaxabs(elemento, velocidad) {

        if(ancho <= 1100 ){
            $(elemento).css({
                'top' : -($(window).scrollTop()*velocidad + 200) +'px'
            });
        }
        else(
            $(elemento).css({
                'top' : -($(window).scrollTop()*velocidad + 600) +'px'
            })
        );

      
    };

  paralaxabs('.spc_img_pallx',-.15);
});
