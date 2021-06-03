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


// Calculator
$(document).ready(function(){
  $('#one').click(function(){
    document.forms.display.value += 1;
  });
  $('#two').click(function(){
    document.forms.display.value += 2;
  });
  $('#three').click(function(){
    document.forms.display.value += 3;
  });
  $('#four').click(function(){
    document.forms.display.value += 4;
  });
  $('#five').click(function(){
    document.forms.display.value += 5;
  });
  $('#six').click(function(){
    document.forms.display.value += 6;
  });
  $('#seven').click(function(){
    document.forms.display.value += 7;
  });
  $('#eight').click(function(){
    document.forms.display.value += 8;
  });
  $('#nine').click(function(){
    document.forms.display.value += 9;
  });
  $('#zero').click(function(){
    document.forms.display.value += 0;
  });
  $('#add').click(function(){
    document.forms.display.value += '+';
  });
  $('#subs').click(function(){
    document.forms.display.value += '-';
  });
  $('#multi').click(function(){
    document.forms.display.value += '*';
  });
  $('#divide').click(function(){
    document.forms.display.value += '/';
  });
  $('#dot').click(function(){
    document.forms.display.value += '.';
  });
  $('#equal').click(function(){
    if (display.value == "") {
      alert("Please enter any numbers to calculate!");
    }else{
      document.forms.display.value =
      eval(document.forms.display.value);
    }
  });
  $('#clear').click(function(){
    document.forms.display.value = "";
  });
})
