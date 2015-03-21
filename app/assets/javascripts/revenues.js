$(document).ready(function() {

  var create = function() {   

  var number = 30
  

  var svg = d3.select("#body").append("svg")
            .attr('height', 400)
            .attr('width', 400);

  var circle = svg.append("circle")
                circle.attr("cx", 200)              
                circle.attr("cy", 200)
                circle.attr("r", number)
                .style('fill', 'blue');
  }
  // create()

  $('.revenue-button').on('click', function() {
      console.log('REVENUEEE')
      var name = $('#name').val();
      var gdp = $('#gdp').val();
      var taxtake = $('#tax_take').val();
      var growthrate = $('#growth_rate').val();
      console.log('INPUTS')
      $.ajax({
        type: 'POST',
        url: '/revenues.json',
        // contentType: 'application/json',
        dataType: 'json',
        data: {revenue: { name: name, gdp: gdp , tax_take: taxtake , growth_rate: growthrate}},
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