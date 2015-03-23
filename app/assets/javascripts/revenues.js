$(document).ready(function() {




// var gdpCircle = function(d) {

//   var gdp = $('#gdp').val();
  
//   var gdpRadius = gdp

// var svg = d3.select("#body").append("svg")
//             .attr('id','svg_id')
//             .attr('height', 400)
//             .attr('width', 400);

//   var circle = svg.append("circle")

//                 circle.attr('id', 'circle_id')
//                 circle.attr("cx", 200)              
//                 circle.attr("cy", 200)
//                 circle.attr("r", gdpRadius)
//                 .style('fill', rgba(0, 102, 255, 0.3) );

// /// debt/gdp pie chart 
// }


// var debtCircle = function(d) {

//   var gdp = $('#gdp').val();
//   var debt = (gdp * .6)

//   var svg = d3.select("#body").append("svg")
//             .attr('id','svg_id')
//             .attr('height', 400)
//             .attr('width', 400);

//   var circle = svg.append("circle").enter()

//                 circle.attr('id', 'circle_id')
//                 circle.attr("cx", 200)              
//                 circle.attr("cy", 200)
//                 circle.attr("r", debt)
//                 .style('fill', 'red');
// }

var present = function(d) {
 

var svg = d3.select("body").append("svg");
var dataInput = 40;

var circle = svg.selectAll("circle")
    .data([dataInput], function(d) { return d; });
        .attr("cy", 70)
        .attr("cx", 70)
        .attr("r", function(d) { return d; });

circle.exit().remove()



//   var gdp = $('#gdp').val();
//   var taxtake = $('#taxtake').val();
//   var growthrate = $('#growthrate').val();

//   var left = (gdp * (taxtake/100))/((taxtake/100)-(growthrate/100))

//   var right = 1 - ((1 + (growthrate/100))/(1 + (taxtake/100)))^1000

//   var revenueRadius = (left * right)/250

//   // ((gdp*(taxtake/100))/((taxtake/100)-(growthrate/100)} * {1 - ((1+(growthrate/100))/(1+(taxtake/100)))^1000}


//   var svg = d3.select("#body").append("svg")
//             .attr('id','svg_id')
//             .attr('height', 400)
//             .attr('width', 400);

//   var circle = svg.append("circle")
//                 circle.attr('id', 'circle_id')
//                 circle.attr("cx", 200)              
//                 circle.attr("cy", 200)
//                 circle.attr("r", revenueRadius)
//                 .style('fill', 'blue');

}

// var debtButton = function(d) {
//   var debt = %a.btn-3d.red{:href => "#"} Current Debt

// }

  


  $('#revenue-button').click(function(event) {
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
        present()

       }

      });
  
  })

  // $('#revenue-button').click(function(event){
  //   event.preventDefault();
  //   console.log('RevenueTransition!')
  //   present().transition().attr('r', revenueRadius );

  // })


  $('#debt-button').click(function(event) {
    event.preventDefault();
    console.log('DEBT')
    debtCircle()
  })

  $('#gdp-button').click(function(event) {
    event.preventDefault();
    console.log('GDPPP')
    gdpCircle()
  })

})




