$(document).ready(function(){var t=function(){var t=$("#gdp").val(),a=$("#taxtake").val(),e=$("#growthrate").val(),r=t*(a/100)/(a/100-e/100),n=1-(1+e/100)/(1+a/100)^1e3,l=r*n/250,o=d3.select("#body").append("svg").attr("id","svg_id").attr("height",400).attr("width",400),c=o.append("circle");c.attr("id","circle_id"),c.attr("cx",200),c.attr("cy",200),c.attr("r",l).style("fill","rgba( 0, 0, 350, 0.5)")};$("#revenue-button").click(function(a){a.preventDefault(),console.log("REVENUEEE");var e=$("#name").val(),r=$("#gdp").val(),n=$("#taxtake").val(),l=$("#growthrate").val();console.log("INPUTS"),$.ajax({type:"POST",url:"/revenues.json",dataType:"json",data:{revenue:{name:e,gdp:r,tax_take:n,growth_rate:l}},complete:function(){t()}})})});