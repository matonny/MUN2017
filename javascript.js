  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        const id = this.hash.slice(1);
        target = target.length ? target : $('[name=' + id +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, () => {
            location.hash = id;
          });
          return false;
        }
      }
    });

    $('.header__nav a').click(() => {    
      $('.js-menu-checkbox').prop('checked', false);
    })
 function initMap() {
        var uluru = {lat: 54.361385, lng: 18.649726};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }    