/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.tabp-code').on('click', function (e) {
      e.preventDefault()
      $(this).parent().find('.tabp-code-drop').toggleClass('show')
    })
  })
})(jQuery)
