(function($){
 var script = {
     init:function(){
        this.gotoFn();        
        this.mobileFn();
        this.skillsFn();        
        this.headerColor();
     },
     gotoFn:function(){         
         const $goBtn = $('.goBtn');
         const $pageBtn = $('.pageBtn');
         
       $.each($goBtn, function(idx){
        $goBtn.on({
            click:function(e){   
                var url = $(this).attr('href');  
                e.preventDefault();            
            $('html,body').stop().animate({scrollTop:$(url).offset().top},500);                  
            }
        });
       });    
     },

     mobileFn:function(){
         const $mobileBtn = $('.mobile-btn');
         const $closeBtn = $('.close-btn');
         const $mobileMenu = $('.mobile-menu');
      
        $mobileBtn.on({
            click:function () {
                $mobileMenu.removeClass('mobile-menu-hide');        
            }            
        })
        $closeBtn.on({
            click:function(){
                $mobileMenu.addClass('mobile-menu-hide');
            }
        })        

       
     },
     skillsFn:function(){
         let $skillsTop = $("#skills").offset().top;
         let t = 0;
         const $skillPer = $('.skill-per');
         const $window = $(window);

        $(window).scroll(function(){
            if($window.scrollTop() >= $skillsTop-200){   
                if(t==0){
                    t=1;
                    $skillPer.addClass('ani');   
                    $skillPer.css("width","100%");          
                }          
            }
            else if($window.scrollTop() == 0){
                t=0;
                $skillPer.css("width","0");
                $skillPer.removeClass('ani');              
            }
        })
     },   
     headerColor:function(){
        const about = document.querySelector('#about');
        const header = document.querySelector('#header');
        const $window = $(window);
        const aboutTop = $(about).offset().top;

        $window.scroll(function(){
            if($window.scrollTop() > aboutTop){              
                header.classList.add('header-color');        
            }
            else if($window.scrollTop() < aboutTop){
                header.classList.remove('header-color');    
            }
        })
        
     }
 }
 script.init();
})(jQuery)


