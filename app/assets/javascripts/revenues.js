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
