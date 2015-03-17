$(document).ready(function() {
    // Circle 
  var svg = d3.select("body").append("svg");
  var dataInput = 30;

  var circle = svg.selectAll("circle")
      .data([dataInput], function(d) { return d; });
      circle.attr("cx", 50)
      circle.attr("cy", 50)
      circle.attr("r", function(d) { return d; })
      circle.attr("fill", "blue");
      console.log("CIRCLE")

  circle.exit().remove();
});
  




// button calculate // def calculate method
$(document).on('click', 'revenue-create-submit', function(){
  console.log("creating");
  var revenue_id = $(this).attr('revenue_id');
  $.ajax({
    type: "POST",
    url: '/revenues/' + revenue_id,
    dataType: 'script'
  })


})





// }
// circle.enter().append("circle")

// Or, to resize circles in a symbol map with a staggered delay:
// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function(d, i) { return i * 10; })
//     .attr("r", function(d) { return Math.sqrt(d * scale); });
