(function() {
  'use strict';
// Example Page 1

  //var examplePage1Module = require('./examplePage1');
  var examplePage1Directive = require('./examplePage1Directive');
  var ExamplePage1Controller = require('./ExamplePage1Controller');

  module.exports = angular.module('examplePage1Module', [])
    .directive('examplePage1', examplePage1Directive)
    .controller('ExamplePage1Controller', ['$scope', '$http', ExamplePage1Controller]);

})();
function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitations', { role: 'style' } ],
        ['2010', 10, 'color: gray'],
        ['2010', 14, 'color: #76A7FA'],
        ['2020', 16, 'opacity: 0.2'],
        ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['2040', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
      ]);
