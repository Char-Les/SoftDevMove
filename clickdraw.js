/*
  Charles Weng
  SoftDev2 pd7

  2018-2-8
*/


/*
  =======================================================================
                                  Variables/Initiation
  =======================================================================
*/

// canvas variable
const ctx = $('#slate')[0].getContext('2d');
var animate;
var frame = 0;
// draw lines with black
ctx.strokeStyle ="#000000";


/*
  =======================================================================
                                  Functions
  =======================================================================
*/

// clear function
const clear = function(){
  // changing height/width of cnavas completely resets entire canvas
  $('#slate')[0].height = $('#slate')[0].height;
}

// draw function
const draw = function(e){
  e.preventDefault();
  animate = true;
  while(animate)
    drawC();
}

// draws a dot
const drawC = function(){
  ctx.fillStyle ="#FF0000";
  clear();
  ctx.beginPath();
  // draw the circle
  ctx.moveTo(parseInt($('#slate')[0].width) / 2 , parseInt($('#slate')[0].height) / 2);
  ctx.arc(parseInt($('#slate')[0].width) / 2 , parseInt($('#slate')[0].height) /  2, 15 + frame, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  frame = window.requestAnimationFrame(drawC());
}

const stop = function(){
  animate = false;
}
/*
  =======================================================================
                                  Button Stuff
  =======================================================================
*/

// add event listenters
$('#stop').click(stop)
$('#clear').click(clear);
$('#slate').click(draw);
