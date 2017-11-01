/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.dropdown-menu .dropdown-item').on('click', function () {
      if ($(this).parent().find('.dropdown-item').hasClass('active')) {
        $(this).parent().find('.dropdown-item').removeClass('active')
      }
      $(this).addClass('active')
      $(this).parents('.dropdown').find('button').text($(this).text())
    })
  })
})(jQuery)
