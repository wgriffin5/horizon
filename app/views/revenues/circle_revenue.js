
var svg = d3.select("body").append("svg");
            
            .attr("width", 400)
            .attr("height", 400);
var dataInput = 10;

var circle = svg.selectAll("circle")
    .data([dataInput], function(d) {return d;});
              .attr("cx", 30)
              .attr("cy", 30)
              .attr("r", function(d) {return d; });
              .attr("fill", "blue")

circle.exit().remove()

// circle.enter().append("circle")

