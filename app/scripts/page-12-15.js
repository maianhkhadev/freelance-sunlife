/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.box-um .title').on('click', function () {
      $(this).parent().find('.detail').toggleClass('show')
    })
    // $('#rp-tabpanel a').on('click', function (e) {
    //   e.preventDefault()
    //   $(this).tab('show')
    // })

  })
})(jQuery)
