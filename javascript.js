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