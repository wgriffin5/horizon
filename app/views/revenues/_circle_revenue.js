
var canvas = d3.select("body")
            .append("svg");
            
            // .attr("width", 400)
            // .attr("height", 400);
var dataInput = 100;

var circle = canvas.selectAll("circle")
    .data([dataInput], function(d) {return d;});
              .attr("cx", 200)
              .attr("cy", 250)
              .attr("r", function(d) {return d; });
              .attr("fill", "blue")

circle.exit().remove();

// circle.enter().append("circle")

