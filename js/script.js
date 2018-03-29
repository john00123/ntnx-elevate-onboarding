

function firstClick(){
  $('.step-one').removeClass('active').addClass('completed');
  $('.step-two').removeClass('inactive').addClass('active');
  $('.next').off('click').on('click', secondClick);
  $('.previous').css('opacity','1');
  $('.container-body').html(company);
}

function secondClick(){
  $('.next').text('Accept & Submit');
  $('.step-two').removeClass('active').addClass('completed');
  $('.step-three').removeClass('inactive').addClass('active');
  $('.previous').off('click').on('click', previousThird);
  $('.container-body').html(terms);
  $('container').addClass('overlay');
  $('body').append(`<div class='underlay js-container'>&nbsp;</div>`);
  confetti();
  setTimeout(function() {
    $('.underlay').fadeOut('slow', ()=>{$('.underlay').remove()});
  }, 5000);
}

function previousSecond(){
  $('.step-one').removeClass('completed').addClass('active');
  $('.step-two').removeClass('active').addClass('inactive');
  $('.previous').css('opacity','0');
  $('.next').off('click').on('click', firstClick);
  $('.container-body').html(main);
}

function previousThird(){
  $('.next').text('Next');
  $('.step-two').removeClass('completed').addClass('active');
  $('.step-three').removeClass('active').addClass('inactive');
  $('.previous').off('click').on('click', previousSecond);
  $('.container-body').html(company);
}


$(document).ready(function() {
  $('.container-body').html(main);
  $('.notMe').change(()=>{ $('.notThat').toggleClass('animate-appear');});
  $('.next').on('click', firstClick);
  $('.previous').css('opacity','0');
  $('.previous').on('click', previousSecond);
});
