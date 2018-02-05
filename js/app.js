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
  color: '#FFFFFF'
};

var ball = {
  x: (canvas.width * 3 / 4),
  y: (canvas.width / 4)
};

var radius = canvas.width * 10 / 960;

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
ctx.fillStyle = cue.color
ctx.fill();
//Ball 1
ctx.beginPath();
ctx.arc(ball.x, ball.y, radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 2
ctx.beginPath();
ctx.arc((ball.x + (radius * 2)), (ball.y + radius), radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 3
ctx.beginPath();
ctx.arc((ball.x + (radius * 2)), (ball.y - radius), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.fill();
//Ball 4
ctx.beginPath();
ctx.arc((ball.x + (radius * 4)), (ball.y + (radius * 2)), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.fill();
//Ball 5 (center ball)
ctx.beginPath();
ctx.arc((ball.x + (radius * 4)), (ball.y), radius, sAngle, eAngle);
ctx.fillStyle = eBall.color;
ctx.fill();
//Ball 6
ctx.beginPath();
ctx.arc((ball.x + (radius * 4)), (ball.y - (radius * 2)), radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 7
ctx.beginPath();
ctx.arc((ball.x + (radius * 6)), (ball.y + (radius * 3)), radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 8
ctx.beginPath();
ctx.arc((ball.x + (radius * 6)), (ball.y + radius), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.fill();
//Ball 9
ctx.beginPath();
ctx.arc((ball.x + (radius * 6)), (ball.y - radius), radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 10
ctx.beginPath();
ctx.arc((ball.x + (radius * 6)), (ball.y - (radius * 3)), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.fill();
//Ball 11
ctx.beginPath();
ctx.arc((ball.x + (radius * 8)), (ball.y + (radius * 4)), radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 12
ctx.beginPath();
ctx.arc((ball.x + (radius * 8)), (ball.y + (radius * 2)), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.fill();
//Ball 13
ctx.beginPath();
ctx.arc((ball.x + (radius * 8)), (ball.y ), radius, sAngle, eAngle);
ctx.fillStyle = uncBall.color;
ctx.fill();
//Ball 14
ctx.beginPath();
ctx.arc((ball.x + (radius * 8)), (ball.y - (radius * 2)), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.fill();
//Ball 15
ctx.beginPath();
ctx.arc((ball.x + (radius * 8)), (ball.y - (radius * 4)), radius, sAngle, eAngle);
ctx.fillStyle = dookBall.color;
ctx.stroke();
ctx.fill();

};

// Grabs innerWidth to resize each element when the window size is updated
var sizeBalls = function() {
  canvas.width = innerWidth / 1.5;
  canvas.height = innerWidth / 3;
  radius = canvas.width * 10 / 960
  ball.x = (canvas.width * 3 / 4);
  ball.y = (canvas.width / 4);
};

var sizeCue = function() {
  canvas.width = innerWidth / 1.5;
  canvas.height = innerWidth / 3;
  radius = canvas.width * 10 / 960
  cue.x = (canvas.width / 4);
  cue.y = (canvas.width / 4);
};

drawBalls();

// Resizes billiard table and balls
window.addEventListener('resize', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = innerWidth / 1.5;;
	canvas.height = innerWidth / 3;
  sizeBalls();
  sizeCue();
  drawBalls();
});
