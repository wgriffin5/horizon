$(document).ready(function() {

  var create = function(d) {   

  // var gdp = $('#revenue_gdp').val(),
  // var taxtake = $('#revenue_tax_take').val(),
  // var growthrate = $('#revenue_growth_rate').val();

  var gdp = 3
  var taxtake = 5
  var growthrate = 10

  var number = (+gdp * +taxtake * +growthrate);

  var svg = d3.select("#body").append("svg")
            .attr('height', 400)
            .attr('width', 400);

  var circle = svg.append("circle")
                circle.attr("cx", 200)              
                circle.attr("cy", 200)
                circle.attr("r", number )
                .style('fill', 'blue')
                circle.exit().remove();
  }

// create()


    $('.circle-button').on('click', function() {
      event.preventDefault
      create()
      console.log(CLICKO)
  })

      // event.preventDefault()
      // console.log(request);
      // $.ajax('/revenues(.json)', {
      //   type: 'POST',
      //   contentType: 'application/json',
      //   dataType: 'json',
      //   data: request,
      //   success: function() {
      //     create()

})








