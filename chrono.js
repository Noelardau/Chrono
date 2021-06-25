// fonctionnement
    $('.timeSaved').slideUp(0.1);
    
    var h = 0, min = 0, sec = 0;
    var deco = $('div:last');
    var cont = $('.cont');
    
    function chro(){
        sec++;
      
        if(sec > 59)
      {
        sec = 0;
        min++;
      }
      if(min>59)
      {
            min = 0;
            h++;
      }
      if(h>23)
      {
        h = 0;
      }
      
      $('.hms').html(`${h<10?"0"+h:h} : ${min<10?"0"+min:min} : ${sec<10?"0"+sec:sec} `);
    }

document.querySelector('.save').disabled = true;  

$('.start').click(function()
    {
        document.querySelector('.save').disabled = false;  
        var playP = $(this);
        playP.toggleClass('ok');
        
        if(playP.hasClass('ok'))
        {
            deco.addClass('deco');
            cont.addClass('de');
            cont.addClass('an');
            playP.html('pause');
            inter =  setInterval(chro,1000)
        } else
        {
            deco.removeClass('deco');
            cont.removeClass('de');
            cont.removeClass('an');

            
            clearInterval(inter);
            playP.html('play');
        }            
    });

$('.reset').click(function()
   {
        cont.removeClass('de');
        cont.removeClass('an');
        deco.removeClass('deco');
        saved.slideUp();    
        $('p').remove();
               
        document.querySelector('.save').disabled = true;  
        sec = 0;
        h = 0;
        min = 0; 
       
        $('.hms').html('00 : 00 : 00') ;
        $('.start').removeClass('ok')
                    .html('start')
        ;
        clearInterval(inter);         
    });
// design
var saved = $('.timeSaved');

$('.save').click(function()
    {
        saved.slideDown();
        var p = $('<p>');
        saved.prepend(p);
        var lg = $('p').length;
        p.html(lg + ') ' +$('.hms').html()); 
        $('.timeSaved').css('background','rgba(10, 37, 39, 0.5)');
        setTimeout(function(){
            $('.timeSaved').css('background','rgba(57, 94, 94)');

        },500)   
    });


  
   

