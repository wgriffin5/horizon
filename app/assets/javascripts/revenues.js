 $(document).ready(function() {

var WIDTH = 200, HEIGHT = 200; 

var inputs = {
      gdp: $('#revenue_gdp').val(),
      taxtake: $('#revenue_tax_take').val(),
      growthrate: $('#revenue_growth_rate').val()
};


var create = function(d) {
  var svg = d3.select("body").append('svg')
              .attr('width', WIDTH)
              .attr('height', HEIGHT);

  svg.selectAll('circle')
      .data(result)
      .enter().append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', result)
      .style('fill', 'blue')
}







  // var svg = d3.select("body").append("svg").attr('width', 250).attr('heighth', 250);
  // var dataInput = 50

  // var circle = svg.selectAll('circle').data([dataInput], function(d) {return d; })
  //                 .attr('cx', 40)
  //                 .attr('cy', 40 )
  //                 .attr('r', function(d) {return d; })
  //                 .attr('fill', 'blue')
                  // .exit().remove;
})
  // var dataInput = (gdp*taxtake*growthrate);
  // var dataInput = 50
  // var circle = svg.selectAll("circle")
  //     .data([dataInput], function(d) { return d; });
  //     circle.attr("cx", 50)
  //     circle.attr("cy", 50)
  //     circle.attr("r", function(d) { return d; })
  //     circle.attr("fill", "blue")
  //     console.log("CIRCLE")
  //     circle.exit().remove();
  

  // $('#form').on('submit', function(e) {
  //   event.preventDefault();
  //   var inputs = {
  //     name: $('#revenue_name').val(),
  //     gdp: $('#revenue_gdp').val(),
  //     taxtake: $('#revenue_tax_take').val(),
  //     growthrate: $('#revenue_growth_rate').val()
  //   };
  //   console.log(request);
  //   $.ajax('/revenues(.json)', {
  //     type: 'POST',
  //     contentType: 'application/json',
  //     dataType: 'json',
  //     data: request,
  //     success: function(result) {
  //       var svg = d3.select("body").append("svg");
  //       var dataInput = (gdp*taxtake*growthrate);
  //       var dataInput = 50
  //       var circle = svg.selectAll("circle")
  //       .data([dataInput], function(d) { return d; });
  //       circle.attr("cx", 50)
  //       circle.attr("cy", 50)
  //       circle.attr("r", function(d) { return d; })
  //       circle.attr("fill", "blue")
  //       console.log("CIRCLE")
  //       circle.exit().remove();svg.append(circle);
  //       var msg = $('<p></p>');
  //       msg.append("post works");
  //       console.log(result);
  //       $('form').append('svg'),
  //     error: function(err){
  //       console.log(err);
      












