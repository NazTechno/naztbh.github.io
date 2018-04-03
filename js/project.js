$('#color-button').click(function(){
var red = $('#red').val();
var green = $('#green').val();
var blue = $('#blue').val();
var color = `rgb(${red},${green},${blue})`;
console.log(color);
$('#colorful-text').html(color);
$('#wrapper').css('background',color);
});

