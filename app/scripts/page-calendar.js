/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.datepicker').datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    })
    $('.ds-group .ds-item .ds1').on('change', function() {
      var $thisYear = $('.ds-group .ds-item .ds2').val()
      var $this = this.value
      var $setDate = $this+'/01/'+$thisYear
      $( '.datepicker' ).datepicker( 'setDate', $setDate )
    })
    $('.ds-group .ds-item .ds2').on('change', function() {
      var $thisMonth = $('.ds-group .ds-item .ds1').val()
      var $this = this.value
      var $setDate = $thisMonth+'/01/'+$this
      $( '.datepicker' ).datepicker( 'setDate', $setDate )
    })
    $('.dropdown-menu .dropdown-item').on('click', function(){
      ($(this).parent().find('.dropdown-item').hasClass('active')) ? $(this).parent().find('.dropdown-item').removeClass('active') : ''
      $(this).addClass('active')
      if($(this).parent().hasClass('dm1')){
        var month_val = $(this).data('month')
        var show_text = $(this).text()
        var year_val = $('.dropdown-menu.dm2 .dropdown-item.active').data('year')
        $( '.datepicker' ).datepicker( 'setDate', month_val+'/01/'+year_val )
      }else{
        var year_val = $(this).data('year')
        var show_text = $(this).text()
        var month_val = $('.dropdown-menu.dm1 .dropdown-item.active').data('month')
        $( '.datepicker' ).datepicker( 'setDate', month_val+'/01/'+year_val )
      }
      console.log(month_val+'/01/'+year_val)
      $(this).parents('.dropdown').find('button').text(show_text)
    })
  })
})(jQuery)
