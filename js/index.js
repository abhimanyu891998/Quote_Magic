$(document).ready(function(){
  $('#submit_btn').on('click', function(e) {
    e.preventDefault();
    $.getJSON("https://talaikis.com/api/quotes/random/",function(json){

    	var html = " ";
    	
    		html+= "<div id = 'quote_area'>";
    		html+= "<p class= 'quote_name'>" + json.quote + "</p>";
      html+= "</br>";
      html+= '<p style="font-weight:100">' + json.author + "</p>"
    		html+= "</div>"

    	
    	$("#quote_area").html(html);
    });
    var colors = ['#E53935','#BA68C8','#673AB7','#009688','#F06292','#6A1B9A','#FF5722','#FF3D00'];
     var randomColorChange = colors[Math.floor(Math.random()*colors.length)];
    $('.jumbotron').animate({
      backgroundColor:randomColorChange,
      color: randomColorChange},1000
    );
    $('.quote_name').animate({opacity:0},1000,function(){
      $(this).animate({opacity:1},1000);
    });
  });
});