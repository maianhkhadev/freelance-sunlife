/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active')
    })

    $('#main-menu .m-menu .m-dropdown a').on('click', function () {
      if ($(this).parent().siblings('.m-dropdown').find('.m-dropdown-item').hasClass('show')) {
        $(this).parent().siblings('.m-dropdown').find('.m-dropdown-item').removeClass('show')
        $(this).parent().siblings('.m-dropdown').find('a').removeClass('show')
      }
      $(this).toggleClass('show')
      $(this).siblings('.m-dropdown-item').toggleClass('show')
    })
    $('.menu-toggler').on('click', function () {
      $('body').toggleClass('opened')
      $('#toggle-menu').toggleClass('opened')
      $('#main-menu').toggleClass('in')
      $('header .nav-header').toggleClass('out')
      $('body').toggleClass('out')
    })
    $('.menu-opener').on('click', function () {
      if (!$('body').hasClass('opened')) {
        $('body').addClass('opened')
      }
      if (!$('#toggle-menu').hasClass('opened')) {
        $('#toggle-menu').addClass('opened')
      }
      if ($('#main-menu').hasClass('in')) {
        $('#main-menu').removeClass('in')
      }
      if (!$('header .nav-header').hasClass('out')) {
        $('header .nav-header').addClass('out')
      }
    })
    $('.menu-closer').on('click', function () {
      if ($('body').hasClass('opened')) {
        $('body').removeClass('opened')
      }
      if ($('#toggle-menu').hasClass('opened')) {
        $('#toggle-menu').removeClass('opened')
      }
      if (!$('#main-menu').hasClass('in')) {
        $('#main-menu').addClass('in')
      }
      if ($('header .nav-header').hasClass('out')) {
        $('header .nav-header').removeClass('out')
      }
    })
  })
})(jQuery)
