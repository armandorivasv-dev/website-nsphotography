$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.nav-quit').click(function(){
        
        $('#offcanvasNavbarLight').slideToggle(500, function(e){
            
            $('.offcanvas-backdrop').hide()
        })
        
    })
    $('.navbar-toggler').click(function(){
        $('#offcanvasNavbarLight').show()
        
    })
});


