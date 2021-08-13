(function($){
 var script = {
     init:function(){
        this.gotoFn();
        this.skillFn();
        this.mobileFn();
        this.moveFont();
        this.headerColor();
     },
     gotoFn:function(){         
         const $goBtn = $('.goBtn');
         const $pageBtn = $('.pageBtn');
         
       $.each($goBtn, function(idx){
        $goBtn.on({
            click:function(){   
                var url = $(this).attr('href');              
            $('html,body').stop().animate({scrollTop:$(url).offset().top},500);                  
            }
        });
       });    
     },
     skillFn:function(){
         const circle = $('.circle');
         const number = $('.number');
         const skils = document.querySelector('#skils');
         const skilsTop = $(skils).offset().top;
         const $window = $(window);

         let totalLen = [];
         let percent = [0.9,0.8,0.8,0.55,0.45];
         let percentLen = [];         
         let piece = [];
         let setId = null;
         let cnt = [0,0,0,0,0];

         $window.scroll( () => {
             if($window.scrollTop() >= skilsTop - 200){
                                     
             }
             else {
                 
             }
         })

         
            $.each(circle, function(idx, obj){
                totalLen[idx] = Math.ceil(obj.getTotalLength());
    
                obj.style.strokeDasharray = totalLen[idx];
                obj.style.strokeDashoffset = totalLen[idx];
    
                //퍼센트 길이 값 구하기//
                percentLen[idx] = Math.ceil(totalLen[idx] * percent[idx]);
                //1/4 길이(한마디) 구해서 0.06초로 나누기
                piece[idx] = (percentLen[idx]/4)/70;     
               
                setId = setInterval(countFn, 10);
    
                function countFn(){
                    cnt[idx] +=piece[idx];
                    if(cnt[idx] > percentLen[idx]){
                        clearInterval(setId);
                    }
                    else {
                        obj.style.strokeDashoffset = totalLen[idx]-cnt[idx];
                        number.eq(idx).html(Math.round(cnt[idx]/totalLen[idx]*100)+'%');
                    }
    
                
                }
             })       
        
        
     },
     mobileFn:function(){
         const mobileBtn = document.querySelector('.mobile-btn');
         const closeBtn = document.querySelector('.close-btn');
         const mobileMenu = document.querySelector('.mobile-menu');

         mobileBtn.addEventListener('click', () => {
             mobileMenuShow();
         })

         closeBtn.addEventListener('click', () => {
            hideMobileMenu();
         })

         function mobileMenuShow(){
            mobileMenu.classList.remove('mobile-menu-hide');
         }
         function hideMobileMenu(){
            mobileMenu.classList.add('mobile-menu-hide');
         }
     },
     moveFont:function(){
        const moveFont = document.querySelector('.move-font');
        const intro = document.querySelector('#intro');
        intro.addEventListener('mousemove', (event) => {
             const x = event.clientX*0.04;
             const y = event.clientY*0.04;

             moveFont.style.transform = `translate(${x}px,${y}px)`;            

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


