//$(window).on("scroll",function(){
//    if($(window).scrollTop()){
//        
//        $(".navbar-custom").addClass('black');
//        
//    }
//    else{
//        $(".navbar-custom").removeClass("black");
//    }
//})

$(window).on("scroll",function(){
    
    if($(window).scrollTop()){
        $(".navbar-custom").addClass("black");
        
    }
    else{
         $(".navbar-custom").removeClass("black");
    }
})

$(document).ready(function(){
    
    var scrollLink=$(".scroll");
    
    scrollLink.click(function(e){
        e.preventDefault();
        
        $('body,html').animate({
            
            scrollTop:$(this.hash).offset().top
        },1000);
    });
})