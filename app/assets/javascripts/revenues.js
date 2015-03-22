$(document).ready(function() {

var create = function(d) {
 
  var gdp = $('#gdp').val();
  var taxtake = $('#taxtake').val();
  var growthrate = $('#growthrate').val();


 var number = ((gdp*taxtake)/(taxtake-growthrate)) * (1 - ((1+growthrate)/(1+taxtake))^1000)

  var svg = d3.select("#body").append("svg")
            .attr('id','svg_id')
            .attr('height', 400)
            .attr('width', 400);

  var circle = svg.append("circle")
                circle.attr('id', 'circle_id')
                circle.attr("cx", 200)              
                circle.attr("cy", 200)
                circle.attr("r", number)
                .style('fill', 'blue');
  }
  
  
// $('a').click(function(event){
//     event.preventDefault(); 
//   });

  $('a').click(function(event) {
      event.preventDefault();
      console.log('REVENUEEE')
      var name = $('#name').val();
      var gdp = $('#gdp').val();
      var taxtake = $('#taxtake').val();
      var growthrate = $('#growthrate').val();
      console.log('INPUTS')
      $.ajax({
        type: 'POST',
        url: '/revenues.json',
        // contentType: 'application/json',
        dataType: 'json',
        data: {revenue: { name: name, gdp: gdp , tax_take: taxtake , growth_rate: growthrate}},
       complete: function() { 
        create()
       }


      });


  


  
})