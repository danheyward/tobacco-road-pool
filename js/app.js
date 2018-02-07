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
// Setting up variable names for Matter.JS systems + creating world
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

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

// Setting up variables for constants
var bRadius = 10,
    bRest = 0.95,
    bFric = 0.3,
    bMass = 1,
    white = '#FFFFFF',
    green = '#00FF00',
    blue = '#0000FF',
    red = '#FF0000'

// Ball Rack position
var sPos = [
  // Cue Ball, Ball 1, Ball 2
  [200, 200], [600, 200], [620, 210],
  // Ball 3, Ball 4, 'Eight' Ball
  [620, 190], [640, 220], [640, 200],
  // Ball 6, Ball 7, Ball 8
  [640, 180], [660, 230], [660, 210],
  // Ball 9, Ball 10, Ball 11
  [660, 190], [660, 170], [680, 240],
  // Ball 12, Ball 13, Ball 14
  [680, 220], [680, 200], [680, 180],
  // Ball 15
  [680, 160]
];

// Ball Specs
var cueSpec = { render: { fillStyle: white }, restitution: bRest, friction: bFric, mass: bMass };
var uncSpec = { render: { fillStyle: green }, restitution: bRest, friction: bFric, mass: bMass };
var dookSpec = { render: { fillStyle: blue }, restitution: bRest, friction: bFric, mass: bMass };
var redSpec = { render: { fillStyle: red }, restitution: bRest, friction: bFric, mass: bMass };

// Bumper Positions
var bPos = [
  // Top Bumper, Bottom Bumper
  [400, 0, 810, 30], [400, 400, 810, 30],
  // Left Bumper, Right Bumper
  [0, 200, 30, 410], [800, 200, 30, 420]
];

// Bumper Specs
var bAttr = {
  isStatic: true,
  restitution: 1,
  friction: 0,
  frictionStatic: 0,
  mass: 15
};

// Racking Balls
var rack = [];
var rackBalls = function() {
  for (var i = 0; i < sPos.length; i++) {
    if (i === 0) {
      rack.push(Bodies.circle(sPos[i][0], sPos[i][1], bRadius, cueSpec))
    } else if (i === 5) {
      rack.push(Bodies.circle(sPos[i][0], sPos[i][1], bRadius, redSpec))
    } else if (i % 2 === 1) {
      rack.push(Bodies.circle(sPos[i][0], sPos[i][1], bRadius, uncSpec))
    } else {
      rack.push(Bodies.circle(sPos[i][0], sPos[i][1], bRadius, dookSpec))
    };
  };
};
rackBalls();

// Building Bumpers
var bumps = [];
var buildBumps = function() {
  for (var i = 0; i < bPos.length; i++) {
    bumps.push(Bodies.rectangle(bPos[i][0], bPos[i][1], bPos[i][2], bPos[i][3], bAttr));
  };
};
buildBumps();

// Add Table, Balls and Bumpers to World, start engine + rendering
World.add(engine.world, rack);
World.add(engine.world, bumps);
Engine.run(engine);
Render.run(render);


var mouse = Mouse.create(render.canvas)
var mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
World.add(world, mouseConstraint);
render.mouse = mouse;


$('.shoot').on('click', function() {
  Body.applyForce(rack[0], {
    x: rack[0].position.x,
    y: rack[0].position.y
  }, {
    x: 0.02,
    y: 0
  })
});
