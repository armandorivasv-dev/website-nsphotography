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
            
            if($(window).width()<992){
                $('#offcanvasNavbarLight').slideToggle(500)
                $('.navbar-toggler').click(function(e){
                    e.preventDefault()
                    $('#offcanvasNavbarLight').show()
                    
                })
            }
        })
        const sections=document.querySelectorAll('.section')
                const navQuit=document.querySelectorAll('.navDesktop')
                console.log(navQuit)
                console.log(sections)
                window.onscroll = () => {
                    var current = "";
                
                    sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop -100) {
                        current = section.getAttribute("id"); }
                        
                    });
                
                    navQuit.forEach((a) => {
                    a.classList.remove("active");
                    if (a.classList.contains(current)) {
                        a.classList.add("active");
                    }
                    });
                };      
        
});


