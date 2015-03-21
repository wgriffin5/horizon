$(document).ready(function() {

  var create = function() {   

  var number = 150
  // var gdp = $('#revenue_gdp').val(),
  // var taxtake = $('#revenue_tax_take').val(),
  // var growthrate = $('#revenue_growth_rate').val();
  // var calculate = function(c) {
  //   var gdp = 3
  //   var taxtake = 5
  //   var growthrate = 12
  //   var result = ()

  // } { result r; };
  

  // var radius = calculate() 
  

  var svg = d3.select("#body").append("svg")
            .attr('height', 400)
            .attr('width', 400);

  var circle = svg.append("circle")
                circle.attr("cx", 200)              
                circle.attr("cy", 200)
                circle.attr("r", number)
                .style('fill', 'blue');
  }
  create()

  $('.revenue-button').on('click', function() {
      console.log('REVENUEEE')
      var name = $('#revenue_name').text();
      var gdp = $('#revenue_gdp').text();
      var taxtake = $('#revenue_tax_take').text();
      var growthrate = $('#revenue_growth_rate').text();
      $.ajax({
        type: 'POST',
        url: '/revenues.json',
        // contentType: 'application/json',
        dataType: 'json',
        data: {revenue: { revenue_name: name, revenue_gdp: gdp , revenue_tax_take: taxtake , revenue_growth_rate: growthrate}},
       success: function() { 
        create()
      }
       });

      // console.log("button");
  })
  
})






// Use an AJAX post to submit your form
// $.post( 
//      sucess: function() {
//        draw your circle
//      }
// )