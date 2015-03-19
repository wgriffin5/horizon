$(document).ready(function() {

var create = function(d) {   
var result = 50 
var svg = d3.select("body").append("svg")
          .attr('height', 200)
          .attr('width', 300)
var circle = svg.append("circle")
              circle.attr("cx", 150)              
              circle.attr("cy", 100)
              circle.attr("r", 30);
}

create()

})



// // var inputs = {
// //       gdp: $('#revenue_gdp').val(),
// //       taxtake: $('#revenue_tax_take').val(),
// //       growthrate: $('#revenue_growth_rate').val()
// // };


//   // var circle = svg.selectAll('circle').data([dataInput], function(d) {return d; })
//   //                 .attr('cx', 40)
//   //                 .attr('cy', 40 )
//   //                 .attr('r', function(d) {return d; })
//   //                 .attr('fill', 'blue')
//                   // .exit().remove;

//   // var dataInput = (gdp*taxtake*growthrate);
//   // var dataInput = 50
//   // var circle = svg.selectAll("circle")
//   //     .data([dataInput], function(d) { return d; });
//   //     circle.attr("cx", 50)
//   //     circle.attr("cy", 50)
//   //     circle.attr("r", function(d) { return d; })
//   //     circle.attr("fill", "blue")
//   //     console.log("CIRCLE")
//   //     circle.exit().remove();
  

//   $('form').on('submit', function(e) {
//     event.preventDefault()
//     console.log(request);
//     $.ajax('/revenues(.json)', {
//       type: 'POST',
//       contentType: 'application/json',
//       dataType: 'json',
//       data: request,
//       success: function() {

//         }










