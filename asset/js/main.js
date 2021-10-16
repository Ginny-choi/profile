(function($){
 var script = {
     init:function(){
        this.gotoFn();        
        this.mobileFn();
        this.skillsFn();
        this.moveFont();
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
            if($window.scrollTop() >= $skillsTop){   
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
     moveFont:function(){
        const moveFont = document.querySelector('.move-font');
        const intro = document.querySelector('#intro');

       if(window.innerWidth >=1200){
        intro.addEventListener('mousemove', (event) => {
            const x = event.clientX*0.04;
            const y = event.clientY*0.04;

            moveFont.style.transform = `translate(${x}px,${y}px)`;            

        })
       }
       else {
         moveFont.style.transform = `translate(${0}px,${0}px)`;   
         console.log('he');
       }
        
        //  intro.addEventListener('mouseleave', function(){
        //      moveFont.style.transform = `translate(0px,0px)`; 
        //  })
         
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


