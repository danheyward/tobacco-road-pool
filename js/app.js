console.log('This is working')

// Billiard Table Initial Set Up
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth / 1.5;
canvas.height = innerWidth / 3;

// Starting Ball Information
var radius = canvas.width * 10 / 960;
var cue = {
  x: (canvas.width / 4),
  y: (canvas.width / 4),
  color: '#FFFFFF',
  dx: 2,
  dy: 1
};

var ball = {
  x: (canvas.width * 3 / 4),
  y: (canvas.width / 4)
};

var radius = canvas.width * 10 / 960;
var diam = radius * 2;

var sAngle = 0;
var eAngle = (Math.PI * 2);

var uncBall = {
  color: 'blue'
};

var dookBall = {
  color: 'navy'
};

var eBall = {
  color: 'orange'
};

// Draw the Balls in Play
var drawBalls = function() {
  //Cue Ball
  ctx.beginPath();
  ctx.arc(cue.x, cue.y, radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = cue.color;
  // ctx.strokeStyle = 'white';
  // ctx.lineWidth = 5;
  // ctx.shadowColor = 'black';
  // ctx.shadowBlur = 15;
  ctx.fill();
  //Ball 1
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 2
  ctx.beginPath();
  ctx.arc((ball.x + diam), (ball.y + radius), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 3
  ctx.beginPath();
  ctx.arc((ball.x + diam), (ball.y - radius), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
  //Ball 4
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 4)), (ball.y + diam), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
  //Ball 5 (center ball)
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 4)), (ball.y), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = eBall.color;
  ctx.fill();
  //Ball 6
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 4)), (ball.y - diam), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 7
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 6)), (ball.y + (radius * 3)), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 8
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 6)), (ball.y + radius), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
  //Ball 9
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 6)), (ball.y - radius), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 10
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 6)), (ball.y - (radius * 3)), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
  //Ball 11
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 8)), (ball.y + (radius * 4)), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 12
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 8)), (ball.y + diam), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
  //Ball 13
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 8)), (ball.y ), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = uncBall.color;
  ctx.fill();
  //Ball 14
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 8)), (ball.y - diam), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
  //Ball 15
  ctx.beginPath();
  ctx.arc((ball.x + (radius * 8)), (ball.y - (radius * 4)), radius, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = dookBall.color;
  ctx.fill();
};

var drawPockets = function() {
  //Pocket 1
  ctx.beginPath();
  ctx.arc(diam, diam, diam, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
  //Pocket 2
  ctx.beginPath();
  ctx.arc((canvas.width / 2), diam, diam, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
  //Pocket 3
  ctx.beginPath();
  ctx.arc((canvas.width - diam), diam, diam, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
  //Pocket 4
  ctx.beginPath();
  ctx.arc(diam, (canvas.height - diam), diam, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
  //Pocket 5
  ctx.beginPath();
  ctx.arc((canvas.width / 2), (canvas.height - diam), diam, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
  //Pocket 6
  ctx.beginPath();
  ctx.arc((canvas.width - diam), (canvas.height - diam), diam, sAngle, eAngle);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
};

var drawBumpers = function() {
  //Pocket 1 to Pocket 2
  ctx.beginPath();
  ctx.moveTo(2 * diam, diam);
  ctx.lineTo(canvas.width / 2 - diam, diam);
  ctx.strokeStyle = '#FFFFFF'
  ctx.stroke();
  // Pocket 2 to Pocket 3
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 + diam, diam);
  ctx.lineTo(canvas.width - 2 * diam, diam);
  ctx.stroke();
  // Pocket 3 to Pocket 4
  ctx.beginPath();
  ctx.moveTo(canvas.width - diam, 2 * diam);
  ctx.lineTo(canvas.width - diam, canvas.height - 2 * diam);
  ctx.stroke();
  // Pocket 4 to Pocket 5
  ctx.beginPath();
  ctx.moveTo(canvas.width - 2 * diam, canvas.height - diam);
  ctx.lineTo(canvas.width / 2 + diam, canvas.height - diam);
  ctx.stroke();
  // Pocket 5 to Pocket 6
  ctx.beginPath();
  ctx.moveTo(diam, canvas.height - 2 * diam);
  ctx.lineTo(diam, 2 * diam);
  ctx.stroke();
  // Pocket 6 to Pocket 1
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - diam, canvas.height - diam);
  ctx.lineTo(2 * diam, canvas.height - diam);
  ctx.stroke();
};

// Grabs innerWidth to resize each element when the window size is updated
var sizeBalls = function() {
  canvas.width = innerWidth / 1.5;
  canvas.height = innerWidth / 3;
  radius = canvas.width * 10 / 960
  diam = radius * 2;
  ball.x = (canvas.width * 3 / 4);
  ball.y = (canvas.width / 4);
};

var sizeCue = function() {
  canvas.width = innerWidth / 1.5;
  canvas.height = innerWidth / 3;
  radius = canvas.width * 10 / 960
  diam = radius * 2;
  cue.x = (canvas.width / 4);
  cue.y = (canvas.width / 4);
};


var clearCanvas = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Resizes billiard table and balls
window.addEventListener('resize', function() {
  clearCanvas();
  canvas.width = innerWidth / 1.5;
	canvas.height = innerWidth / 3;
  sizeBalls();
  sizeCue();
  drawBalls();
  drawPockets();
  drawBumpers();
});

var draw = function() {
  requestAnimationFrame(draw);
  clearCanvas();
  drawBalls();
  drawPockets();
  drawBumpers();

  // if (cue.x + cue.dx > (canvas.width - radius) || cue.x + cue.dx - radius < 0)
  //   cue.dx = -cue.dx;
  // if (cue.y + cue.dy > (canvas.height - radius) || cue.y + cue.dy - radius < 0)
  //   cue.dy = -cue.dy;
  //
  // cue.x += cue.dx;
  // cue.y += cue.dy;
};

draw();
