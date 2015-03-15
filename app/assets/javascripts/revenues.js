$(document).ready(function() {
  




// button calculate
$(document).on('click', 'revenue-create-submit', function(){
  console.log("creating");
  var revenue_id = $(this).attr('revenue_id');
  $.ajax({
    type: "POST",
    url: '/revenues/' + revenue_id,
    dataType: 'script'
  })
})



// Circle 

var svg = d3.select("body").append("svg");
var dataInput = 30;

var circle = svg.selectAll("circle")
    .data([dataInput], function(d) { return d; });
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", function(d) { return d; })
        .attr("fill", "blue");

circle.exit().remove()

// circle.enter().append("circle")

// Or, to resize circles in a symbol map with a staggered delay:
// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function(d, i) { return i * 10; })
//     .attr("r", function(d) { return Math.sqrt(d * scale); });



})



