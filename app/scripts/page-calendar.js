/* eslint-env browser */
(function ($) {
  'use strict'

  var thisYear
  var thisMonth
  var setDate
  var monthVal
  var yearVal
  var showText
  $(document).ready(function () {
    $('.datepicker').datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    })
    $('.ds-group .ds-item .ds1').on('change', function () {
      thisYear = $('.ds-group .ds-item .ds2').val()
      setDate = this.value + '/01/' + thisYear
      $('.datepicker').datepicker('setDate', setDate)
    })
    $('.ds-group .ds-item .ds2').on('change', function () {
      thisMonth = $('.ds-group .ds-item .ds1').val()
      setDate = thisMonth + '/01/' + this.value
      $('.datepicker').datepicker('setDate', setDate)
    })
    $('.dropdown-menu .dropdown-item').on('click', function () {
      ($(this).parent().find('.dropdown-item').hasClass('active')) ? $(this).parent().find('.dropdown-item').removeClass('active') : ''
      $(this).addClass('active')
      if($(this).parent().hasClass('dm1')){
        monthVal = $(this).data('month')
        showText = $(this).text()
        yearVal = $('.dropdown-menu.dm2 .dropdown-item.active').data('year')
      } else {
        yearVal = $(this).data('year')
        showText = $(this).text()
        monthVal = $('.dropdown-menu.dm1 .dropdown-item.active').data('month')
      }
      $('.datepicker').datepicker('setDate', monthVal + '/01/' + yearVal)
      $(this).parents('.dropdown').find('button').text(showText)
    })
  })
})(jQuery)
