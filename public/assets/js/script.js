/*-----------------------------------------------------------
 * Template Name    : Arshia | Responsive One Page HTML Template
 * Author           : Retrina Group
 * Version          : 1.0.0
 * Created          : June 2020
 * File Description : Main js file of the template
 *------------------------------------------------------------
 */

// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function() {

  "use strict";
  
  //  $("body").overlayScrollbars({ });

  // themeOption();
  navbarToggler();
  // smoothScroll();
  bgBackground();
  colorFull();
  borderColor();
  ColorPallet();
  swiperSlider();
  sliderOwlCarousel();
  typedJS();
  portfolioPopup();
  clientCarousel();
  postSidebar();
  mapInit();

});

$window.on("load", (function() {
  $("#overlayer").delay(500).fadeOut('slow');
  $(".loader").delay(1000).fadeOut('slow');
  portfolioIsotop();
  headerSticky();
  // ChangeColor();
  scrollToAnchor();
}));
$window.on('scroll', function() {


  returnToTop();
  headerSticky();
  // ChangeColor();
  skills();
});

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/


/*-------------------------
        Theme Option
-------------------------*/
// function themeOption() {

//   "use strict";

//   $('.color-scheme li .dark-scheme').click(function() {
//     $("body").addClass('arshia-dark');
//     $('.color-scheme li a').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('.color-scheme li .light-scheme').click(function() {
//     $("body").removeClass('arshia-dark');
//     $('.color-scheme li a').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('.theme-skin li .flat-skin').click(function() {
//     $("body").addClass('flat-demo');
//     $('.theme-skin li a').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('.theme-skin li .neo-skin').click(function() {
//     $("body").removeClass('flat-demo');
//     $('.theme-skin li a').removeClass('active');
//     $(this).addClass('active');
//   });
// }

/*--------------------------
       RETURN TO TOP
--------------------------*/
function returnToTop() {

  "use strict";

  var $returnToTop = $('.return-to-top');
  if ($window.scrollTop() > 150) {
    
    $returnToTop.addClass('show');
  } else {
    $returnToTop.removeClass('show');
  }
  $returnToTop.click(function() {
    $root.stop().animate({
      scrollTop: 0
    }, 1500);
  });
}

/*--------------------------
       NAVBAR TOGGLER
--------------------------*/
function navbarToggler() {

  "use strict";

  $('.navbar-toggler').on('click', function() {
    $('header').toggleClass('z-index');
    $('.post-sidebar-toggle').toggleClass('d-none');
  })

}
/*-------------------------
        SMOOTH SCROLL
-------------------------*/
// function smoothScroll() {

//   "use strict";

//   $('.header .navbar-nav a, .to-contact, .scroll-down a').on('click', function(event) {
//     var $anchor = $(this);
//     $root.stop().animate({
//       scrollTop: $($anchor.attr('href')).offset().top - 60
//     }, 1500, 'easeInOutQuart');
//     event.preventDefault();
//     $(".navbar-collapse").collapse('hide');
//   });


// }

/*-------------------------
        SCROLL TO
-------------------------*/

function scrollToAnchor() {
  //getting the anchor link in the URL and deleting the `#`
  var value = window.location.hash.replace('');
  var sectionAnchor = value;
  var section = $(document).find(sectionAnchor);

  if (section.length > 0) {
    $root.stop().animate({
      scrollTop: $(section).offset().top - 60
    }, 1500, 'easeInOutQuart');
  }
}

/*-------------------------
        HEADER STICKY
-------------------------*/
function headerSticky() {

  "use strict";

  if ($window.scrollTop() > 10) {
    $('#header').addClass('header-sticky');
  } else {
    $('#header').removeClass('header-sticky');
  }
}

// /*-------------------------
//         ChangeColor
// -------------------------*/
// function ChangeColor() {

//   "use strict";

//   // var top1 = $('#hero').offset().top;
//   // var top2 = $('#about').offset().top;

//   if ($window.width() > 991 && $window.scrollTop() < 100) {
//     $('.special-section').css('color', '#fff');
//   } else {
//     $('.special-section').css('color', '#1a1a1a');
//   }
// }

/*-------------------------
        ColorFull Demo
-------------------------*/

function bgBackground() {

  "use strict";

  var list = document.getElementsByClassName('data-background');

  for (var i = 0; i < list.length; i++) {
    var color = list[i].getAttribute('data-color');
    list[i].style.backgroundColor = "" + color + "";
  }
}



function colorFull() {
  var allDivs = document.getElementsByClassName('data-text-color');

  for (var i = 0; i < allDivs.length; ++i) {
    var color = allDivs[i].getAttribute('data-color');
    allDivs[i].style.color = "" + color + "";
  }
}


function borderColor() {
  var allDivs = document.getElementsByClassName('timeline-border');

  for (var i = 0; i < allDivs.length; ++i) {
    var color = allDivs[i].getAttribute('data-color');
    allDivs[i].style.borderLeftColor = "" + color + "";
  }
}


// -------------------------------------------------------------
//   Color Panel
// -------------------------------------------------------------
function ColorPallet() {

  "use strict";

  $("ul.pattern .color1").click(function() {
    return $("#option-color").attr("href", "assets/css/color/green-color.css"), !1
  });
  $("ul.pattern .color2").click(function() {
    return $("#option-color").attr("href", "assets/css/color/yellow-color.css"), !1
  });
  $("ul.pattern .color3").click(function() {
    return $("#option-color").attr("href", "assets/css/color/golden-color.css"), !1
  });
  $("ul.pattern .color4").click(function() {
    return $("#option-color").attr("href", "assets/css/color/sky-blue-color.css"), !1
  });
  $("ul.pattern .color5").click(function() {
    return $("#option-color").attr("href", "assets/css/color/blue-color.css"), !1
  });
  $("ul.pattern .color6").click(function() {
    return $("#option-color").attr("href", "assets/css/color/purple-color.css"), !1
  });
  $("ul.pattern .color7").click(function() {
    return $("#option-color").attr("href", "assets/css/color/orange-color.css"), !1
  });
  $("ul.pattern .color8").click(function() {
    return $("#option-color").attr("href", "assets/css/color/pink-color.css"), !1
  });
  $("ul.pattern .color9").click(function() {
    return $("#option-color").attr("href", "assets/css/color/red-color.css"), !1
  });
  $("#color-switcher .pallet-button").click(function() {
    return $("#color-switcher .color-pallet").toggleClass('show'), !1
  })

}
/*-----------------------------
     HERO SWIPER SLIDER
------------------------------*/
function swiperSlider() {

  "use strict";

  if ($(".swiper-container").length) {
    var swiper = new Swiper('.swiper-container', {
      effect: "slide",
      allowTouchMove: 'false',
      touchRatio: 0,
      threshold: 992,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var textSwiper = new Swiper('.text-swiper', {
      effect: "fade",
      allowTouchMove: 'false',
      touchRatio: 0,
      threshold: 992,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $(".hero-item-image").css('background', function() {
      var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
      return bg;
    });
    var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
    $fullscreen.css("height", $window.height());
  }
}
/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel() {
  "use strict";

  $('.hero .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    touchDrag: true,
    smartSpeed: 5000,
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
  });
  $('#hero-slider').on("translate.owl.carousel", function() {
    setTimeout(function() {
      $('.hero-slide').removeClass("zoom");
    }, 1000)
  });
  $('#hero-slider').on("translated.owl.carousel", function() {
    $('.owl-item.active .hero-slide').addClass("zoom");
  });
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

  "use strict";

  if ($('.element').length > 0) {
    var options = {
      strings: $(".element").attr('data-elements').split(','),
      typeSpeed: 100,
      backDelay: 3000,
      backSpeed: 50,
      loop: true
    };
    var typed = new Typed(".element", options);
  }

  if ($('#typed2').length > 0) {
    var options = {
      strings: [''],
      typeSpeed: 0,
      backSpeed: 0,
      backDelay: 700,
      startDelay: 0,
      fadeOut: true,
      cursorChar: '_',
      loop: true
    };
    var typed = new Typed("#typed2", options);
  }
}


/*-------------------------
          Skills
-------------------------*/
function skills() {

  "use strict";

  var scroll = $window.scrollTop();
  var skillsDiv = $('#skills');
  if (skillsDiv.length > 0) {
    var winH = $window.height(),
      skillsT = skillsDiv.offset().top;
    if (scroll + winH > skillsT) {
      $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
          width: $(this).attr('data-percent')
        }, 6000);
      });
    }
  }
}

/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {

  "use strict";

  // init Isotope
  var initial_items = $('#showMore-initials').data("initial");
  var next_items = $('#showMore-initials').data("next");
  var $pfilter = $('#portfolio-filter');
  var $grid = $('.portfolio-items');
  var $showMore = $('#showMore');
  $grid.isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry',
  });
  $pfilter.find('a').on("click", function() {
    var filterValue = $(this).attr('data-filter');
    $pfilter.find('a').removeClass('active');
    $(this).addClass('active');
    $grid.isotope({
      filter: filterValue,
    });
    updateFilterCounts();
    return false;
  });

  function updateFilterCounts() {
    var itemElems = $grid.isotope('getFilteredItemElements');
    var count_items = $(itemElems).length;
    if (count_items > initial_items) {
      $showMore.show();
      $showMore.parent('.button-border').addClass('mr-2 mr-sm-4').removeClass('p-0');

    } else {
      $showMore.hide();
      $showMore.parent('.button-border').removeClass('mr-2 mr-sm-4').addClass('p-0');
    }
    if ($('.portfolio-item').hasClass('visible_item')) {
      $('.portfolio-item').removeClass('visible_item');
    }
    var index = 0;

    $(itemElems).each(function() {
      if (index >= initial_items) {
        $(this).addClass('visible_item');
      }
      index++;
    });
    $grid.isotope('layout');
  }

  function showNextItems(pagination) {
    var itemsMax = $('.visible_item').length;
    var itemsCount = 0;
    $('.visible_item').each(function() {
      if (itemsCount < pagination) {
        $(this).removeClass('visible_item');
        itemsCount++;
      }
    });
    if (itemsCount >= itemsMax) {
      $showMore.hide();
      $showMore.parent('.button-border').removeClass('mr-2 mr-sm-4').addClass('p-0');
    }
    $grid.isotope('layout');
  }
  // function that hides items when page is loaded
  function hideItems(pagination) {
    var itemsMax = $('.portfolio-item').length;
    var itemsCount = 0;
    $('.portfolio-item').each(function() {
      if (itemsCount >= pagination) {
        $(this).addClass('visible_item');
      }
      itemsCount++;
    });
    if (itemsCount < itemsMax || initial_items >= itemsMax) {
      $showMore.hide();
      $showMore.parent('.button-border').removeClass('mr-2 mr-sm-4').addClass('p-0');
    }
    $grid.isotope('layout');
  }
  $showMore.on('click', function(e) {
    e.preventDefault();
    showNextItems(next_items);
  });
  hideItems(initial_items);
}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

  "use strict";

  if (('.portfolio-items').length > 0) {
    $('.portfolio-items').each(function() {
      $(this).magnificPopup({
        delegate: '.js-zoom-gallery',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });
  }
}

/*-------------------------
  Testimonial CAROUSEL JS
-------------------------*/
function clientCarousel() {
  $(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 5,
    nav: false,
    autoplay: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 700,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      992: {
        items: 2,
        nav: false,
      },

    }
  });
}

/*-------------------------
    POST SIDEBAR TOGGLER
-------------------------*/
function postSidebar() {
  $('.post-sidebar-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.post-sidebar').toggleClass('open');
  })
}

/*-------------------------
          GOOGLE Map
-------------------------*/
function mapInit() {

  "use strict";
  var myMap = $('#my-map');

  if (myMap.length) {
    var lat = myMap.data("location-lat");
    var lng = myMap.data("location-lng");
    var options = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 7,
      mapTypeControl: true,
      gestureHandling: 'cooperative',
      panControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.DEFAULT,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      scaleControl: false,
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#576ee9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#d5d5d5"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#f8f8f8"
        }, {
          "lightness": 25
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#222222"
        }, {
          "lightness": 30
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 10
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }],
    };
    var map = new google.maps.Map(document.getElementById('my-map'), options);
    var marker1 = new google.maps.Marker({
      position: map.getCenter(),
      title: $('title').text(),
      icon: myMap.data("location-icon"),
      animation: google.maps.Animation.BOUNCE
    });
    marker1.setMap(map);
  }
}


/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

  "use strict";

  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendEmail() {

  "use strict";

  var name = $('#id_name').val();
  var email = $('#id_email').val();
  var subject = $('#id_subject').val();
  var comments = $('#id_message').val();

  if (!name) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('Name is required');
  } else if (!email) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('Email is required');
  } else if (!validateEmail(email)) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('Email is not valid');
  } else if (!subject) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('Name is required');
  } else if (!comments) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('Subject is required');
  } else {
    $.ajax({
      type: 'POST',
      data: $("#contactForm").serialize(),
      url: "send/",
      beforeSend: function() {
        $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Enviando..');
      },
      success: function(data) {
        $('#submit-btn').html('Enviar Mensaje');
        var myObj = JSON.parse(data);
        if (myObj['status'] == 'Felicitaciones') {
          $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
          $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
          document.getElementById("contactForm").reset();
        } else if (myObj['status'] == 'Error') {
          $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
          $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
        } else if (myObj['status'] == 'Warning') {
          $('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
          $('.toast-body').html('<strong>' + myObj['status'] + ' : </strong> ' + myObj['message']);
        }
      },
      error: function(xhr) {
        $('#submit-btn').html('Enviar Mensaje');
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
        $('.toast-body').html('<strong> Error : </strong> Algo salió mal, Por favor intenta nuevamente.');
      },
    });
  }
}

/*-------------------------
     AJAX API
-------------------------*/
function validateEmail(email) {

  "use strict";

  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sendApi() {

  "use strict";

  var name = $('#id_nombre').val();
  var email = $('#id_email').val();
  var subject = $('#id_asunto').val();
  var comments = $('#id_mensaje').val();

  if (!name) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('El NombreAPI es requerido');
  } else if (!email) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('El Email es requerido');
  } else if (!validateEmail(email)) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('El Email no es valido');
  } else if (!subject) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('El Asunto es requerido');
  } else if (!comments) {
    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
    $('.toast-body').html('El Mensaje es requerido');
  } else {
    $("#data").empty();
    $.ajax({
      type: 'POST',
      data: $("#apiForm").serialize(),
      url: "/restApi/post",
      beforeSend: function() {
        $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Enviando..');
      },
      success: function(data) {
        $('#submit-btn').html('Enviar Mensaje');
        var myObj = JSON.parse(data);
        console.log(myObj.context.api.length);

        for (var i = 0; i < myObj.context.api.length; i++) {
          console.log(i);
        }

        $('#myTable').dataTable().fnClearTable();
        $('#myTable').dataTable({
          data: myObj.context.api,
          columns: [{
              data: 'id'
            },
            {
              data: 'first_name'
            },
            {
              data: 'last_name'
            }
          ]
        });
        $('#myTable').dataTable().fnAddData(myObj.context.api);
      },
      error: function(xhr) {
        $('#submit-btn').html('Enviar Mensaje');
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
        $('.toast-body').html('<strong> Error : </strong> Algo salió mal, Por favor intenta nuevamente.');
      },
    });
  }
}

$(document).ready(function() {
  var csrfToken = $("input[name=csrfmiddlewaretoken]").val();

  /*-------------------------
   AJAX TASKLIST
  -------------------------*/
  $("#createButton").click(function() {
    var serializedData = $("#createTaskForm").serialize();

    $.ajax({
      url: $("#createTaskForm").data('url'),
      data: serializedData,
      type: 'post',
      success: function(response) {
        $("#taskList").append('<div class="card mb-1" id="taskCard" data-id="' + response.task.id +
          '"><div class="card-body"  style="color: black">' + response.task.titulo +
          '<button type="button" class="close" data-id="' + response.task.id +
          '"><span aria-hidden="true">&times;</span></button></div></div>')
      }
    })

    $("#createTaskForm")[0].reset();
  });

  $("#taskList").on('click', '.card', function() {
    var dataId = $(this).data('id');
    $.ajax({
      url: '/taskListAjax/' + dataId + '/completed/',
      data: {
        csrfmiddlewaretoken: csrfToken,
        id: dataId
      },
      type: 'post',
      success: function() {
        var cardItem = $('#taskCard[data-id="' + dataId + '"]');
        cardItem.css('background-color', '#86FF33').hide().slideDown();
        $("#taskList").append(cardItem);
      }
    });
  }).on('click', 'button.close', function(event) {
    event.stopPropagation();

    var dataId = $(this).data('id');

    $.ajax({
      url: '/taskListAjax/' + dataId + '/delete/',
      data: {
        csrfmiddlewaretoken: csrfToken,
        id: dataId
      },
      type: 'post',
      dataType: 'json',
      success: function() {
        $('#taskCard[data-id="' + dataId + '"]').remove();
      }
    });
  });

  /*-------------------------
   AJAX API
  -------------------------*/
  $("#apiCreateButton").click(function() {
    var serializedData = $("#apiForm").serialize();

    $.ajax({
      url: $("#apiForm").data('url'),
      data: serializedData,
      type: 'post',
      success: function(response) {
        console.log('response', response.datoApi[0].nombre);
        $("#apiDataList").append('<tr><td>' + response.datoApi[0].nombre +
          '</td><td>' + response.datoApi[0].apellido +
          '</td><td>' + response.datoApi[0].genero +
          '</td><td><button type="button" class="btn btn-info btn-icon btn-sm mt-1">' +
          '<i class="lni lni-pencil-alt"></i>' +
          '</button><button type="button" class="delete btn btn-danger btn-icon btn-sm mt-1" data-id="{{ dato.id }}">' +
          '<i class="lni lni-eraser"></i></button></td></tr>')
      }
    })

    $("#apiForm")[0].reset();
  });

  $("#apiDataList").on('click', 'button.delete', function(event) {
    event.stopPropagation();

    var dataId = $(this).data('id');

    $.ajax({
      url: '/restApi/' + dataId + '/delete/',
      data: {
        csrfmiddlewaretoken: csrfToken,
        id: dataId
      },
      type: 'post',
      dataType: 'json',
      success: function() {
        $('#apiData[data-id="' + dataId + '"]').remove();
      }
    });
  });
});

// EVITA QUE AL PRESIONAR ENTER EN UN FORMULARIO ESTE ACCIONE EL ENVÍO DE DATOS
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  }))
});
