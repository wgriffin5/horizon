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

var range_els = document.querySelectorAll('[class*=webkit] input[type=range]'), 
    n_els, style_el, styles, units, base_sel, track_sel, _thumb_sel, a, b;

if(range_els) {
  style_el = document.createElement('style');
  document.body.appendChild(style_el);
  
  n_els = range_els.length;
  
  styles = [];
  units = ['GHz', ['MB', 'GB'], 'GB'];
  
  base_sel = '.js input[type=range]';
  track_sel = ['::-webkit-slider-runnable-track', ' /deep/ #track'];
  thumb_sel = ['::-webkit-slider-thumb', ' /deep/ #thumb'];
  a = ':after';
  b = ':before';
    
  for(var i = 0; i < n_els; i++) {
    styles.push('');
    
    range_els[i].addEventListener('input', function() {
      var idx = ~~this.id.split('r')[1], 
          min = this.min || 0, 
          max = this.max || 100, 
          perc = ~~(100*(this.value - min)/(max - min)), 
          val = ~~this.value, 
          u = units[idx - 1], 
          curr_sel = base_sel + '[id=r' + idx + ']', 
          str = '';
      
      if(idx == 2) {
        u = u[(val < 3)?0:1];
        val = (val < 3) ? Math.pow(2, 7 + val) : (val - 2);
      }
      
      str += curr_sel + track_sel[0] + '{background-size:' + perc + '% 100%}';
      str += curr_sel + thumb_sel[0] + b + ',' + curr_sel + thumb_sel[1] + b + 
        '{content:"' + val + '"}';
      str += curr_sel + thumb_sel[0] + a + ',' + curr_sel + thumb_sel[1] + a + 
        '{content:"' + u + '"}';
            
      styles[idx] = str;
      
      style_el.textContent = styles.join('');
    }, false);
  }
}
  
  
})