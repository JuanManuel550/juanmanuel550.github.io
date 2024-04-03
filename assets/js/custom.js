$('#slides').superslides({
  animation: 'fade',
  pagination: false,
  play: 5000,
  animation_speed: 3000
});
$('.carousel').carousel({
  interval: false
});

$(function () {

  function arrowAnimStart() {
    $('.down-arrow i').animate({'margin-top': '-10px'}, 500, function () {
      arrowAnimRepeat();
    });
  }
  function arrowAnimRepeat() {
    $('.down-arrow i').animate({'margin-top': '-25px'}, 500, function () {
      arrowAnimStart();
      return false;
    });
  }

  arrowAnimStart();

  var winHeight = $(window).height();

  $('.down-arrow i').bind('click', function() {
    $('html, body').animate({scrollTop: winHeight}, 900);
  });

  $('.logo-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 5,
    slidesToShow: 5,
    variableWidth: true,
    prevArrow: '<i class="fa fa-angle-left fa-4x"></i>',
    nextArrow: '<i class="fa fa-angle-right fa-4x"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

  var winWidth = $(window).width();

  if (winWidth < 768){

    $('.subpage-logos a, .history-timeline a').bind('click', function () {
      $('html, body').animate({scrollTop:$('.tab-content').offset().top-75}, 300);
    });

  }

//Offcanvas Push Menu
  $(".menu-trigger.quit").hide();
  $("#my-menu").mmenu({
    offCanvas: {
      position  : "right",
      zposition : "front"
    }
  });
  var API = $("#my-menu").data( "mmenu" );
  $(".menu-trigger.open").click(function() {
    API.open();
    if (winWidth > 768){
      $(".menu-trigger.open").hide().animate({'right': 300}, 300, 'easeInQuad');
      $(".menu-trigger.quit").show().animate({'right': 300}, 300, 'easeInQuad');
    } else {
      $(".menu-trigger.open").hide().animate({'right': 256}, 300, 'easeInQuad');
      $(".menu-trigger.quit").show().animate({'right': 256}, 300, 'easeInQuad');
    }
  });
  $(".menu-trigger.quit").click(function() {
    API.close();
    if (winWidth > 768){
      $(".menu-trigger.quit").hide().animate({'right': 0}, 300, 'easeOutQuad');
      $(".menu-trigger.open").show().animate({'right': 0}, 300, 'easeOutQuad');
    }else{
      $(".menu-trigger.quit").hide().animate({'right': 15}, 300, 'easeOutQuad');
      $(".menu-trigger.open").show().animate({'right': 15}, 300, 'easeOutQuad');
    }
  });

  $('.sidebar-float nav').hide();
  $('.collapse-btn').hide();
  $('.sidebar-float .expand-btn').bind('click', function () {
    $('.sidebar-float nav').show(500);
    $('.collapse-btn').show();
    $('.expand-btn').hide();
  });
  $('.sidebar-float .collapse-btn').bind('click', function () {
    $('.sidebar-float nav').hide(500);
    $('.expand-btn').show();
    $('.collapse-btn').hide();
  });

  $('.subpage-logos img').each(function () {
    $(this).click(function() {
      $('.subpage-logos img').removeClass('active');
      $(this).addClass('active');
    });
  });

  $('.history-timeline a').bind('click',  function () {
    $('.history-timeline a').removeClass('active');
    $(this).addClass('active');
  });

});

window.sr = new scrollReveal();