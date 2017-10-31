/* eslint-env browser */
(function ($) {
  'use strict'

  var countS = 0
  $(document).ready(function () {
    $('.security-number a').on('click', function () {
      if(countS < 4){
        $('.security-dots li').eq(countS).addClass('active')
        countS++
      }
    })
    $('.security-dots span').on('click', function () {
      if(countS > 0){
        countS = parseInt(countS) - 1
        $('.security-dots li').eq(countS).removeClass('active')
      }
    })
  })
})(jQuery)
