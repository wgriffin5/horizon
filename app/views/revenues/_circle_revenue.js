
var canvas = d3.select("body")
            .append("svg");
            
            // .attr("width", 400)
            // .attr("height", 400);
var dataInput = 100;

var circle = canvas.selectAll("circle")
              .attr("cx", 200)
              .attr("cy", 250)
              .attr("r", 100)
              .attr("fill", "blue")

circle.exit().remove();

// circle.enter().append("circle")

