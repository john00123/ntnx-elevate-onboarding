
//variables and initial deployment
const content = [main, company, terms, confirm];
let pg = 0;
display(pg);

//steps
function step(pg){
  $(`.step:eq(${pg})`).removeClass().addClass('step active');
  $(`.step:eq(${pg - 1 })`).removeClass().addClass('step completed');
  $(`.step:eq(${pg + 1 }), .step:eq(${pg + 2 })`).removeClass().addClass('step inactive');

}

//display function
function display(pg){
  $('.container-body').html(content[pg]);

  //takes you back to the top of the form
  $("html, body").animate({ scrollTop: 0 }, "slow");

  //show/hide previous button
  pg >= 1 ?
  $('.previous').css('opacity','1').css('pointer-events','all'):
  $('.previous').css('opacity','0').css('pointer-events','none');

  //expand function
  pg < 1 ?
  $('.notMe').change(()=> $('.notThat').toggleClass('animate-appear'))
  : null ;

  // Change agreen text
  if (pg === 2){
    $('.next').text('Agreed & Submit');
    $('.next').addClass('disabled');
    $('#agreed').change(()=> {
      if ($('#agreed').prop('checked')){
        $('.next').removeClass('disabled')//blah blah
      }
    });

    $('#scroller').click(()=>{
      $('.agreement').stop()
        .animate({scrollTop: $('.agreement')[0].scrollHeight
      }, 800);
    });
  }
  else{

    $('.next').text('Next');
    $('.next').removeClass('disabled');
  }
  //last step
  if (pg === 3){
    $('container').css('width','600px');
    $('header, footer').hide();
    $('.container-body').css('border-radius','4px');
    //confetti
    confetti();
    setTimeout(function(){
      $('.underlay').fadeOut('slow',() => $('.underlay').remove())
    }, 5000);

  }
  else{
    $('header, footer').show();
    $('.container-body').css('border-radius' ,'');
  }
}


//loads

$(document).ready(function() {
  $('.next').click(()=> pg += 1);
  $('.previous').click(()=> pg -= 1);
  $('.next, .previous').click(() =>
    { display(pg); step(pg);}
  );
});
