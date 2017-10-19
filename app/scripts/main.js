/* eslint-env browser */
(function ($) {
  'use strict'

  // Your custom JavaScript goes here
  $(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active')
    })
    $('.your-class').slick({
      dots: true,
      arrows: false
    })

    $('#toggle-menu').on('click', function () {
      $('#toggle-menu').toggleClass('opened')
      $('#main-menu').toggleClass('in')
      $('header .nav-header').toggleClass('out')
    })

    $('#main-menu .m-menu .m-dropdown a').on('click', function () {
      if ($(this).parent().siblings('.m-dropdown').find('.m-dropdown-item').hasClass('show')) {
        $(this).parent().siblings('.m-dropdown').find('.m-dropdown-item').removeClass('show')
        $(this).parent().siblings('.m-dropdown').find('a').removeClass('show')
      }
      $(this).toggleClass('show')
      $(this).siblings('.m-dropdown-item').toggleClass('show')
    })
  })
})(jQuery)
