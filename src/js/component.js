$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });

  $('.article_2-slider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    initialSlide: 2,
    //    adaptiveHeight: true
  });




  $('.next-btn').on('click', function () {
    $('.article_2-slider').slick('slickNext');
  });

  /*  $('.article_2-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('#curent').text('0' + (currentSlide + 1))
      $('#all').text('0' + slick.slideCount);

      var widthPr = $('.progress-slider').width() / slick.slideCount;

      if (currentSlide == 0) {
        $('.progress-slider span').width(widthPr)
      } else {
        $('.progress-slider span').width($('.progress-slider span').width() + widthPr)
      }

    });*/
  $('.article_2-slider  .slick-dots').width($('.navigation-slider .number').width())
  $('.article_2-slider .slick-dots li').width($('.article_2-slider .slick-dots').width() / $('.article_2-slider .item').length)
  $('.article_2-slider ').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var elm = nextSlide + 1;
    if (elm < 10) elm = '0' + elm;
    $('#curent').text(elm);
    $('#all').text('0' + slick.slideCount);


  });






  $(window).on('scroll', function () {

    if ($('div').hasClass('whatT')) {
      var ofstSect = $('.whatT').offset().top;
      var ofstSect2 = $('.cases').offset().top;



      if (($(this).scrollTop() + 800) > ofstSect && $('.offer_photo-slider').hasClass('not-load')) {
        $('.offer_photo-slider--item').each(function () {
          var srcImg = $(this).attr('data-srcimg');
          var imgstr = '<img src="' + srcImg + '" alt=""></img>'
          $(this).html(imgstr);
        });
        $('.offer_photo-slider').removeClass('not-load');

        $('.offer_photo-slider').slick({
          //        lazyLoad: 'ondemand',
          dots: false,
          infinite: true,
          vertical: true,
          speed: 400,
          slidesToShow: 1,
          adaptiveHeight: true,
          //        autoplay: true,
          //        autoplaySpeed: 3000,
          prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.758225" y1="8.16936" x2="7.50642" y2="1.42116" stroke="#2B2B2B" stroke-width="2"/><line y1="-1" x2="9.54339" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 12.7482 8.74805)" stroke="#2B2B2B" stroke-width="2"/><line x1="7.05664" y1="22.373" x2="7.05664" y2="2.00006" stroke="#2B2B2B" stroke-width="2"/></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12.4552" y1="15.1636" x2="5.70696" y2="21.9118" stroke="#2B2B2B" stroke-width="2"/><line x1="0.707107" y1="15.4975" x2="5.70711" y2="20.4975" stroke="#2B2B2B" stroke-width="2"/><line x1="6.15674" y1="0.36084" x2="6.15674" y2="21.333" stroke="#2B2B2B" stroke-width="2"/></svg></button>'
        });


      }
      if (($(this).scrollTop() + 800) > ofstSect2 && $('.cases-slider').hasClass('not-load')) {
        $('.cases-slider .item .img').each(function () {
          var srcImg = $(this).attr('data-srcimg');
          var imgstr = '<img src="' + srcImg + '" alt=""></img>'
          $(this).html(imgstr);
        });
        $('.cases-slider').removeClass('not-load');

        $('.cases-slider').slick({
          //          lazyLoad: 'ondemand',
          dots: false,
          infinite: true,
          vertical: true,
          speed: 400,
          slidesToShow: 1,
          adaptiveHeight: true,
          //          autoplay: true,
          //          autoplaySpeed: 3000,
          prevArrow: '<button type="button" class="slick-prev"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.758225" y1="8.16936" x2="7.50642" y2="1.42116" stroke="#2B2B2B" stroke-width="2"/><line y1="-1" x2="9.54339" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 12.7482 8.74805)" stroke="#2B2B2B" stroke-width="2"/><line x1="7.05664" y1="22.373" x2="7.05664" y2="2.00006" stroke="#2B2B2B" stroke-width="2"/></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12.4552" y1="15.1636" x2="5.70696" y2="21.9118" stroke="#2B2B2B" stroke-width="2"/><line x1="0.707107" y1="15.4975" x2="5.70711" y2="20.4975" stroke="#2B2B2B" stroke-width="2"/><line x1="6.15674" y1="0.36084" x2="6.15674" y2="21.333" stroke="#2B2B2B" stroke-width="2"/></svg></button>'
        });
      }
    }

  })







  /*  $('#offers-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var elm = nextSlide + 1;
      if (elm < 10) elm = '0' + elm;
  //    $('#curent_offers').text(elm);
     


    });*/

  $('.registration-form form input').focusin(function () {
    $(this).parents('.label').find('span').css({
      'color': '#5016FF'
    })
  })

  $('.registration-form form input').focusout(function () {
    $(this).parents('.label').find('span').css({
      'color': '#000'
    })
  })



  /* form valid*/
  var alertImage = '<svg style="width: 20px; position:absolute;top: 10px;right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);
  $('input[name="page_url"]').val(window.location);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
    $('input[name="country"]').val(response.country);
    $('input[name="region"]').val(response.region);
  }, "jsonp");

  $('input[name="phone"]').inputmask("+38(099) 99 999 99");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);




  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);



    $.ajax({
      type: 'POST',
      url: 'db/reg.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });


    setTimeout(function () {
      window.location.href = "success.html";
    }, 800);

  });



  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);
  });

  $('.menu').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })


  if ($(window).width() < 1200) {

    $('.mob-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      customPaging: function (slick, index) {
        return '<a>0' + (index + 1) + '</a>';
      }
    })

    $('.menu li a').click(function () {
      $('.menu').hide('200')
    })

    $('.offers-slider').slick({
      //    lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      adaptiveHeight: true,
      //    autoplay: true,
      //    autoplaySpeed: 6000,
    });


  } else {
    $('.offers-slider').slick({
      //    lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      //    adaptiveHeight: true,
      //    autoplay: true,
      //    autoplaySpeed: 6000,
    });

  }






  $('.offers-arr_prev').on('click', function () {
    $('.offers-slider').slick('slickPrev');
  });

  $('.offers-arr_next').on('click', function () {
    $('.offers-slider').slick('slickNext');
  });



  $('.offers-slider .slick-dots li').width($('.offers-slider .slick-dots').width() / $('.offers-slider .item-main').length)
  $('.offers-slider  .slick-dots').width($('.offers-navigation .number-offers').width())



  $('#offers-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#curent_offers').text('0' + $('#offers-slider .slick-dots .slick-active').text());
    $('#all_offers').text('0' + slick.slideCount);
  })

  var observer = lozad();
  observer.observe();

});