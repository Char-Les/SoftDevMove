/*
  Charles Weng
  SoftDev2 pd7
  K#02 - They lock us in the tower whenever we get caught ...which is often
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
  drawC();
}

// draws a dot
const drawC = function(){
  clear();
  ctx.fillStyle ="#FF0000";
  ctx.beginPath();
  // draw the circle
  ctx.moveTo(parseInt($('#slate')[0].width) / 2 , parseInt($('#slate')[0].height) / 2);
  ctx.arc(parseInt($('#slate')[0].width) / 2 , parseInt($('#slate')[0].height) /  2, 100 + Math.abs(frame % 100 - 50), 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  frame = window.requestAnimationFrame(drawC);
  console.log(frame);
}

const stop = function(){
  animate = false;
  window.cancelAnimationFrame(frame);
}
/*
  =======================================================================
                                  Button Stuff
  =======================================================================
*/

// add event listenters
$('#stop').click(stop);
$('#start').click(draw);
