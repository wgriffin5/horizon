$(document).ready(function() {

/////// ALIGNEDLEFT TESTO 
// var mexico = function(d) {

// var gdp = $('#gdp').val();
// var gdpRadius = gdp

// //
// var gdp = $('#gdp').val();
// var debtRadius = (gdp * .6)
// //
// var gdp = $('#gdp').val();
// var taxtake = $('#taxtake').val();
// var growthrate = $('#growthrate').val();
// var left = (gdp * (taxtake/100))/((taxtake/100)-(growthrate/100))
// var right = 1 - ((1 + (growthrate/100))/(1 + (taxtake/100)))^1000
// var revenueRadius = (left * right)/250
////
// var w = 500
// var h = 500

// var svg = d3.select('#body')
//             .append('svg')
//             .attr('width', w)
//             .attr('height', h);

// // var dataset = [ revenueRadius, debtRadius, gdpRadius  ]   

// var dataset = [ 30, 40, 50, 50 ];
// var spaceCircles = [ 50, 70, 90, 30 ]

// var circles = svg.selectAll('circle')
//                   .data(dataset)
//                   .enter()
//                   .append('circle');

// var circleAttributes = circles
//                         .attr('cx', 50)
//                         .attr('cy', 50)
//                         .attr('r', function(d) { return d; })
//                         .style('fill', 'blue');

// circles.attr('cx', function(d, i) {
//             return (i * 50) + 20;
// })     
// .attr('cy', h/2)
// .attr('r', function(d) {
//       return d;
// }




/////// test clicko to create multiple buttons from single click

// $('#revenue-button').click(function(event) {
//     event.preventDefault();
//     console.log('MEXICO')
//     mexico()
// })

// })



////// ///// GDP FUNCTION



// var gdpCircle = function(d) {

// var gdp = $('#gdp').val();
  
// var gdpRadius = gdp

//  var svg = $('#svg')


//   var circle = svg.append("circle")
//                 circle.attr('id', 'gdpCircle')
//                 circle.attr("cx", 200)              
//                 circle.attr("cy", 200)
//                 circle.attr("r", gdpRadius)
//                 .style('fill', 'rgba(0, 102, 255, 0.3)' );

///////////// DEBT FUNCTION


// var debtCircle = function(d) {

// var gdp = $('#gdp').val();
// var debtRadius = (gdp * .6)

//   var svg = $('#svg')
  

//   var circle = svg.append("circle")
//                 circle.attr('id', 'debtCircle')
//                 circle.attr("cx", 200)              
//                 circle.attr("cy", 200)
//                 circle.attr("r", debtRadius)
//                 .style('fill', 'rgba(0, 240, 0, .5)');
// }


//////////////   PRESENT REVENUE FUNCTION

var present = function(d) {
 


var gdp = $('#gdp').val();
var taxtake = $('#taxtake').val();
var growthrate = $('#growthrate').val();

var left = (gdp * (taxtake/100))/((taxtake/100)-(growthrate/100))

var right = 1 - ((1 + (growthrate/100))/(1 + (taxtake/100)))^1000

var revenueRadius = (left * right)/250


  // ((gdp*(taxtake/100))/((taxtake/100)-(growthrate/100)} * {1 - ((1+(growthrate/100))/(1+(taxtake/100)))^1000}

var svg = d3.select("body").selectAll("svg");
var circle = svg.selectAll("circle")
    .data([revenueRadius], function(d) { return d; });

circle.enter().append("circle")
    .attr("cy", 60)
    .attr("cx", 60)
    .style('fill', 'rgba( 0, 0, 350, 0.5)')
    .attr("r", revenueRadius);

circle.exit().remove();

            // .append("svg")
            // .attr('id','svg')
            // .attr('height', 400)
            // .attr('width', 400);

  // var circle = svg.append("circle")
  //               circle.attr('id', 'revenueCircle')
  //               circle.attr("cx", 200)              
  //               circle.attr("cy", 200)
  //               circle.attr("r", revenueRadius)
  //               .style('fill', 'rgba( 0, 0, 350, 0.5)');
                // .transform()

                // console.log(svg.enter())
}


//   var svg = d3.select("#body")
//             .append("svg")
//             .attr('id','svg')
//             .attr('height', 400)
//             .attr('width', 400);

//   var circle = svg.append("circle")
//                 circle.attr('id', 'revenueCircle')
//                 circle.attr("cx", 200)              
//                 circle.attr("cy", 200)
//                 circle.attr("r", revenueRadius)
//                 .style('fill', 'rgba( 0, 0, 350, 0.5)');
//                 // .transform()

//                 console.log(svg.enter())
// }


//////////////////// REVENUE BUTTON


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

})

///////////////// TRANSITION REVENUE BUTTON

  // $('#revenue-button').click(function(event){
  //   event.preventDefault();
  //   console.log('RevenueTransition!')
  //   present().transition().attr('r', revenueRadius );

  // })


/////////////// GDP BUTTON



// $('#gdp-button').click(function(event) {
//     event.preventDefault();
//     console.log('GDPPP')
//     gdpCircle()
//   })



////////////// DEBT BUTTON


// $('#debt-button').click(function(event) {
//     event.preventDefault();
//     console.log('DEBT')
//     debtCircle()
//   })

  

// })



