//
// // Billiard Table Initial Set Up
// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');
// canvas.width = innerWidth / 1.5;
// canvas.height = innerWidth / 3;
//
// // Starting Ball Information
// var radius = canvas.width * 10 / 960;
// var cue = {
//   x: (canvas.width / 4),
//   y: (canvas.width / 4),
//   color: '#FFFFFF',
//   dx: 2,
//   dy: 1
// };
//
// var ball = {
//   x: (canvas.width * 3 / 4),
//   y: (canvas.width / 4)
// };
//
// var radius = canvas.width * 10 / 960;
// var diam = radius * 2;
//
// var sAngle = 0;
// var eAngle = (Math.PI * 2);
//
// var uncBall = {
//   color: 'blue'
// };
//
// var dookBall = {
//   color: 'navy'
// };
//
// var eBall = {
//   color: 'orange'
// };
//
// // Draw the Balls in Play
// var drawBalls = function() {
//   //Cue Ball
//   ctx.beginPath();
//   ctx.arc(cue.x, cue.y, radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = cue.color;
//   ctx.fill();
//   //Ball 1
//   ctx.beginPath();
//   ctx.arc(ball.x, ball.y, radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 2
//   ctx.beginPath();
//   ctx.arc((ball.x + diam), (ball.y + radius), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 3
//   ctx.beginPath();
//   ctx.arc((ball.x + diam), (ball.y - radius), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
//   //Ball 4
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 4)), (ball.y + diam), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
//   //Ball 5 (center ball)
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 4)), (ball.y), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = eBall.color;
//   ctx.fill();
//   //Ball 6
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 4)), (ball.y - diam), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 7
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 6)), (ball.y + (radius * 3)), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 8
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 6)), (ball.y + radius), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
//   //Ball 9
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 6)), (ball.y - radius), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 10
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 6)), (ball.y - (radius * 3)), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
//   //Ball 11
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 8)), (ball.y + (radius * 4)), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 12
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 8)), (ball.y + diam), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
//   //Ball 13
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 8)), (ball.y ), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = uncBall.color;
//   ctx.fill();
//   //Ball 14
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 8)), (ball.y - diam), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
//   //Ball 15
//   ctx.beginPath();
//   ctx.arc((ball.x + (radius * 8)), (ball.y - (radius * 4)), radius, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = dookBall.color;
//   ctx.fill();
// };
//
// var drawPockets = function() {
//   //Pocket 1
//   ctx.beginPath();
//   ctx.arc(diam, diam, diam, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = '#000000';
//   ctx.fill();
//   //Pocket 2
//   ctx.beginPath();
//   ctx.arc((canvas.width / 2), diam, diam, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = '#000000';
//   ctx.fill();
//   //Pocket 3
//   ctx.beginPath();
//   ctx.arc((canvas.width - diam), diam, diam, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = '#000000';
//   ctx.fill();
//   //Pocket 4
//   ctx.beginPath();
//   ctx.arc(diam, (canvas.height - diam), diam, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = '#000000';
//   ctx.fill();
//   //Pocket 5
//   ctx.beginPath();
//   ctx.arc((canvas.width / 2), (canvas.height - diam), diam, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = '#000000';
//   ctx.fill();
//   //Pocket 6
//   ctx.beginPath();
//   ctx.arc((canvas.width - diam), (canvas.height - diam), diam, sAngle, eAngle);
//   ctx.closePath();
//   ctx.fillStyle = '#000000';
//   ctx.fill();
// };
//
// var drawBumpers = function() {
//   //Pocket 1 to Pocket 2
//   ctx.beginPath();
//   ctx.moveTo(2 * diam, diam);
//   ctx.lineTo(canvas.width / 2 - diam, diam);
//   ctx.strokeStyle = '#FFFFFF'
//   ctx.stroke();
//   // Pocket 2 to Pocket 3
//   ctx.beginPath();
//   ctx.moveTo(canvas.width / 2 + diam, diam);
//   ctx.lineTo(canvas.width - 2 * diam, diam);
//   ctx.stroke();
//   // Pocket 3 to Pocket 4
//   ctx.beginPath();
//   ctx.moveTo(canvas.width - diam, 2 * diam);
//   ctx.lineTo(canvas.width - diam, canvas.height - 2 * diam);
//   ctx.stroke();
//   // Pocket 4 to Pocket 5
//   ctx.beginPath();
//   ctx.moveTo(canvas.width - 2 * diam, canvas.height - diam);
//   ctx.lineTo(canvas.width / 2 + diam, canvas.height - diam);
//   ctx.stroke();
//   // Pocket 5 to Pocket 6
//   ctx.beginPath();
//   ctx.moveTo(diam, canvas.height - 2 * diam);
//   ctx.lineTo(diam, 2 * diam);
//   ctx.stroke();
//   // Pocket 6 to Pocket 1
//   ctx.beginPath();
//   ctx.moveTo(canvas.width / 2 - diam, canvas.height - diam);
//   ctx.lineTo(2 * diam, canvas.height - diam);
//   ctx.stroke();
// };
//
// // Grabs innerWidth to resize each element when the window size is updated
// var sizeBalls = function() {
//   canvas.width = innerWidth / 1.5;
//   canvas.height = innerWidth / 3;
//   radius = canvas.width * 10 / 960
//   diam = radius * 2;
//   ball.x = (canvas.width * 3 / 4);
//   ball.y = (canvas.width / 4);
// };
//
// var sizeCue = function() {
//   canvas.width = innerWidth / 1.5;
//   canvas.height = innerWidth / 3;
//   radius = canvas.width * 10 / 960
//   diam = radius * 2;
//   cue.x = (canvas.width / 4);
//   cue.y = (canvas.width / 4);
// };
//
//
// var clearCanvas = function() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }
//
//
// // Resizes billiard table and balls
// window.addEventListener('resize', function() {
//   canvas.width = innerWidth / 1.5;
// 	canvas.height = innerWidth / 3;
//   draw();
// });
//
// var draw = function() {
//   requestAnimationFrame(draw);
//   clearCanvas();
//   sizeBalls();
//   sizeCue();
//   drawBalls();
//   drawPockets();
//   drawBumpers();
//
//   // if (cue.x + cue.dx > (canvas.width - 3 * radius) || cue.x + cue.dx - 3 * radius < 0)
//   //   cue.dx = -cue.dx;
//   // if (cue.y + cue.dy > (canvas.height - 3 * radius) || cue.y + cue.dy - 3 * radius < 0)
//   //   cue.dy = -cue.dy;
//   //
//   // cue.x += cue.dx;
//   // cue.y += cue.dy;
// };
//
// draw();

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

var world = World.create({ gravity: { x: 0, y: 0 } });
var engine = Engine.create({ world, timing: { timeScale: 1 } });
var render = Render.create({
                element: document.body,
                engine: engine,
                options: {
                    width: 800,
                    height: 400,
                    wireframes: false
                }
             });

var cueColor = { render: { fillStyle: '#FFFFFF' } };
var uncColor = { render: { fillStyle: '#99BADD' } };
var dookColor = { render: { fillStyle: '#00009C' } };
var eightColor = { render: { fillStyle: '#FF0000' } };


var topWall = Bodies.rectangle(400, 0, 810, 30, { isStatic: true });
var leftWall = Bodies.rectangle(0, 200, 30, 420, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 400, 810, 30, { isStatic: true });
var rightWall = Bodies.rectangle(800, 200, 30, 420, { isStatic: true});
var cue = Bodies.circle(200, 200, 10, cueColor);
var ball1 = Bodies.circle(600, 200, 10, uncColor);
var ball2 = Bodies.circle(620, 210, 10, uncColor);
var ball3 = Bodies.circle(620, 190, 10, dookColor);
var ball4 = Bodies.circle(640, 220, 10, dookColor);
var ball5 = Bodies.circle(640, 200, 10, eightColor);
var ball6 = Bodies.circle(640, 180, 10, uncColor);
var ball7 = Bodies.circle(660, 230, 10, uncColor);
var ball8 = Bodies.circle(660, 210, 10, dookColor);
var ball9 = Bodies.circle(660, 190, 10, uncColor);
var ball10 = Bodies.circle(660, 170, 10, dookColor);
var ball11 = Bodies.circle(680, 240, 10, uncColor);
var ball12 = Bodies.circle(680, 220, 10, dookColor);
var ball13 = Bodies.circle(680, 200, 10, uncColor);
var ball14 = Bodies.circle(680, 180, 10, dookColor);
var ball15 = Bodies.circle(680, 160, 10, dookColor);

World.add(engine.world,
  [
    cue, ball1, ball2, ball3, ball4,
    ball5, ball6, ball7, ball8, ball9,
    ball10, ball11, ball12, ball13,
    ball14, ball15, topWall, leftWall,
    bottomWall, rightWall
  ]);

Engine.run(engine);
Render.run(render);

$('.shoot').on('click', function() {
  Body.applyForce(cue, {
    x: cue.position.x,
    y: cue.position.y
  }, {
    x: 0.02,
    y: 0
  });
});
