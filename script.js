  $(document).ready(function () {

      $(".heart").click(function () {
          $(this).toggleClass('fas fa-heart');
          $(this).toggleClass('far fa-heart');
      });

      var $backToTop = $(".backTop");
      $backToTop.hide();

      $(window).on('scroll', function () {
          if ($(this).scrollTop() > 100) {
              $backToTop.fadeIn();
          } else {
              $backToTop.fadeOut();
          }
      });

      $backToTop.on('click', function (e) {
          $("html, body").animate({
              scrollTop: 0
          }, 500);
      });

      $('*').tooltip();

      $(function () {
          $("#tabs").tabs();
      });

      $(function () {
          var kataKunci = [
              "Handphone",
              "Kamera",
              "Laptop"

          ];
          $("#search").autocomplete({
              source: kataKunci
          });
      });


  });