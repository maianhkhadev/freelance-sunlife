/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

    $('.income-detail').on('show.bs.collapse', function (e) {
      $(e.target).closest('.box-income').addClass('expand')
    })
    $('.income-detail').on('hide.bs.collapse', function (e) {
      $(e.target).closest('.box-income').removeClass('expand')
    })
  })
})(jQuery)
