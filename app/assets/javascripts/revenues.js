$(document).ready(function() {
  

})

$(document).on('click', 'revenue-create-submit', function(){
  console.log("creating");
  var revenue_id = $(this).attr('revenue_id');
  $.ajax({
    type: "POST",
    url: '/revenues/' + revenue_id,
    dataType: 'script'
  })
})




var svg = d3.select("body").append("svg");
            // .attr("width", 400)
            // .attr("height", 400);
var dataInput = 30;

var circle = svg.selectAll("circle")
    .data([dataInput], function(d) {return d;});
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", function(d) {return d; })
        .attr("fill", "blue");

circle.exit().remove()

circle.enter().append("circle")