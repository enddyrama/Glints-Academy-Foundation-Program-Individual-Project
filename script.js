$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
$('a[href*="#"]').on('click',function(e){
  e.preventDefault();
    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top,
    },
      500, 
      'linear'
      ); 
    });
});


// dark mode
const chk = document.getElementById('chk');
var darkmode = document.body;
var header = document.getElementById("header");

chk.addEventListener('change', () => {
  darkmode.classList.toggle('dark');
  header.classList.toggle('dark');
});
