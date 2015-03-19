$(document).ready(function() {

var dataInput = 20;

var create = function(d) {   

var gdp = 4
var taxtake = 5
var growthrate = 6

var number = (+gdp * +taxtake * +growthrate);

var svg = d3.select("body").append("svg")
          .attr('height', 200)
          .attr('width', 300);
var circle = svg.append("circle")
              circle.attr("cx", 150)              
              circle.attr("cy", 100)
              circle.attr("r", number )
              .style('fill', 'blue');
}


create()

})





// // var inputs = {
// //       gdp: $('#revenue_gdp').val(),
// //       taxtake: $('#revenue_tax_take').val(),
// //       growthrate: $('#revenue_growth_rate').val()
// // };





  

//   $('form').on('submit', function(e) {
//     event.preventDefault()
//     console.log(request);
//     $.ajax('/revenues(.json)', {
//       type: 'POST',
//       contentType: 'application/json',
//       dataType: 'json',
//       data: request,
//       success: function() {
        // create()
//         }










