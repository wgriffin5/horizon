$(document).ready(function() {

var dataInput = 20;

var create = function(d) {   

var number = 20

var svg = d3.select("body").append("svg")
          .attr('height', 200)
          .attr('width', 300);
var circle = svg.append("circle")
              circle.attr("cx", 150)              
              circle.attr("cy", 100)
              circle.attr("r", number );
}


create()

})


// var svg = d3.select("body").append("svg");
// var dataInput = 40;

// var circle = svg.selectAll("circle")
//     .data([dataInput], function(d) { return d; });
//         .attr("cy", 70)
//         .attr("cx", 70)
//         .attr("r", function(d) { return d; });

// circle.exit().remove()





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
                create
//         }










