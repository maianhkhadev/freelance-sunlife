/* eslint-env browser */
(function ($) {
  'use strict'

  var thisYear
  var thisMonth
  var setDate
  var monthVal
  var yearVal
  var showText
  var dates = ['11/05/2017', '11/22/2017', '12/02/2017']
  var datesCont = ['2','9','0']
  var hlHtml
  $(document).ready(function () {
    $('.datepicker').datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      beforeShowDay: highlightDays,
      onSelect: function (date, inst) {
        inst.inline = false
        console.log(date)
        $('.datepicker').datepicker('setDate', date)
        updateHighlightDayConts()
      }
    })
    updateHighlightDayConts()
    $('.ds-group .ds-item .ds1').on('change', function () {
      thisYear = $('.ds-group .ds-item .ds2').val()
      setDate = this.value + '/01/' + thisYear
      $('.datepicker').datepicker('setDate', setDate)
      updateHighlightDayConts()
    })
    $('.ds-group .ds-item .ds2').on('change', function () {
      thisMonth = $('.ds-group .ds-item .ds1').val()
      setDate = thisMonth + '/01/' + this.value
      $('.datepicker').datepicker('setDate', setDate)
      updateHighlightDayConts()
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
      updateHighlightDayConts()
    })
    function highlightDays (date) {
      for (var i = 0; i < dates.length; i++) {
        if (new Date(dates[i]).toString() == date.toString()) {
          return [true, 'highlight highlight'+i]
        }
      }
      return [true, '']
    }
    function updateHighlightDayConts () {
      for (var i = 0; i < dates.length; i++) {
        hlHtml = $('.datepicker .ui-datepicker-calendar tbody td.highlight'+i).html()
        $('.datepicker .ui-datepicker-calendar tbody td.highlight'+i).html(hlHtml+'<span>'+datesCont[i]+'</span>')
      }
    }
  })
})(jQuery)
