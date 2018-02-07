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
  mouse: mouse,
  options: {
      background: '#FFFFFF',
      width: 1000,
      height: 600,
      wireframes: false
  }
});

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

// Setting up variables for constants
var bRadius = 10,
    bRest = 0.95,
    bFric = 0.3,
    bMass = 1,
    white = '#F6F7EB',
    green = '#44BBA4',
    blue = '#3F88C5',
    black = '#393E41',
    orange = '#E94F37'

// Ball Rack position
var baPos = [
  // Cue Ball, Ball 1, Ball 2
  [300, 300], [700, 300], [720, 310],
  // Ball 3, Ball 4, 'Eight' Ball
  [720, 290], [740, 320], [740, 300],
  // Ball 6, Ball 7, Ball 8
  [740, 280], [760, 330], [760, 310],
  // Ball 9, Ball 10, Ball 11
  [760, 290], [760, 270], [780, 340],
  // Ball 12, Ball 13, Ball 14
  [780, 320], [780, 300], [780, 280],
  // Ball 15
  [780, 260]
];

// Ball Specs
var cueSpec = { render: { fillStyle: orange }, restitution: bRest, friction: bFric, mass: bMass };
var uncSpec = { render: { fillStyle: green }, restitution: bRest, friction: bFric, mass: bMass };
var dookSpec = { render: { fillStyle: blue }, restitution: bRest, friction: bFric, mass: bMass };
var blackSpec = { render: { fillStyle: black }, restitution: bRest, friction: bFric, mass: bMass };

// Bumper Positions
var buPos = [
  // Top Bumper, Bottom Bumper
  [500, 87.5, 850, 25], [500, 512.5, 850, 25],
  // Left Bumper, Right Bumper
  [87.5, 300, 25, 450], [912.5, 300, 25, 450]
];

// Bumper Specs
var bAttr = {
  isStatic: true,
  restitution: 1,
  friction: 0,
  frictionStatic: 0,
  mass: 15,
  render: {
    fillStyle: orange
  }
};

// Racking Balls
var rack = [];
var rackBalls = function() {
  for (var i = 0; i < baPos.length; i++) {
    if (i === 0) {
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, cueSpec))
    } else if (i === 5) {
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, blackSpec))
    } else if (i % 2 === 1) {
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, uncSpec))
    } else {
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, dookSpec))
    };
  };
};
rackBalls();

// Building Bumpers
var bumpers = [];
var buildBumpers = function() {
  for (var i = 0; i < buPos.length; i++) {
    bumpers.push(Bodies.rectangle(buPos[i][0], buPos[i][1], buPos[i][2], buPos[i][3], bAttr));
  };
};
buildBumpers();

// Add Table, Balls and Bumpers to World, start engine + rendering
World.add(engine.world, rack);
World.add(engine.world, bumpers);
World.add(world, mouseConstraint);
Engine.run(engine);
Render.run(render);


$('.shoot').on('click', function() {
  Body.applyForce(rack[0], {
    x: rack[0].position.x,
    y: rack[0].position.y
  }, {
    x: 0.02,
    y: 0
  })
});
