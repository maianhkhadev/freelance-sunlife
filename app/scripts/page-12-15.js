/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.box-um .title').on('click', function () {
      $('.box-um .detail').toggleClass('show')
    })
  })
})(jQuery)
