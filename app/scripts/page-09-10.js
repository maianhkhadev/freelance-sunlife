/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

    $('.box-um .title').on('click', function () {
      $('.box-um .detail').toggleClass('show')
    })

    var context = document.getElementById('canvas').getContext('2d')
    new Chart(context, {
      type: 'bar',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [{
          type: 'line',
          label: '2015',
          borderColor: '#003946',
          borderWidth: 2,
          fill: false,
          data: [100, 220, 350, 100, 300, 200, 110, 100, 220, 350, 100, 300]
        }, {
          type: 'bar',
          label: '2016',
          backgroundColor: '#eaab00',
          data: [0, 800, 600, 400, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        }
      }
    })
  })
})(jQuery)
