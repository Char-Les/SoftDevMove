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
var frame = 0;
// do circle or triangle?
var circle;
// how fast does the circle do its thing
var circleSpeed = 21;
// how do you like your square?
var squareW = 60;
var squareH = 50;
// how fast in each direction should it go?
var velocity = [2,2];


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
const draw = function(){
  if (circle){
    drawC();
    return;
  }
  drawR();
}

// does the circle thing
const drawC = function(){
  clear();
  ctx.fillStyle ="#FF0000";
  ctx.beginPath();
  // draw the circle
  ctx.moveTo(parseInt($('#slate')[0].width) / 2 , parseInt($('#slate')[0].height) / 2);
  ctx.arc(parseInt($('#slate')[0].width) / 2 , parseInt($('#slate')[0].height) /  2, 100 + Math.abs(circleSpeed * frame % 100 - 50), 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  frame = window.requestAnimationFrame(drawC);
  console.log(frame);
}

// does the dvd thing
const drawR = function(){
  clear();
  ctx.fillStyle ="#FF0000";
  // upper left corner of square
  ctx.beginPath();
  var squareC = [0,0];
  squareC[0] = Math.abs(velocity[0] * frame % ((parseInt($('#slate')[0].width) - squareW) * 2) - parseInt($('#slate')[0].width - squareW));
  squareC[1] = Math.abs(velocity[1] * frame % ((parseInt($('#slate')[0].height) - squareH) * 2) - parseInt($('#slate')[0].height - squareH));
  ctx.fillRect(squareC[0], squareC[1], squareW, squareH);
  frame = window.requestAnimationFrame(drawR);
  console.log(frame);
}

const stop = function(){
  window.cancelAnimationFrame(frame);
}

/*
  =======================================================================
                                  Button Stuff
  =======================================================================
*/

// add event listenters
$('#stop').click(stop);
$('#start1').click(function(){
  stop();
  circle = true;
  draw();
});$('#start2').click(function(){
  stop();
  circle = false;
  draw();
});
