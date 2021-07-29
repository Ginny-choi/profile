(function($){
 var script = {
     init:function(){
        this.gotoFn();
        this.skillFn();
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

         let totalLen = [];
         let percent = [0.9,0.8,0.8,0.55,0.45];
         let percentLen = [];         
         let piece = [];
         let setId = null;
         let cnt = [0,0,0,0,0];

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
     }
 }
 script.init();
})(jQuery)