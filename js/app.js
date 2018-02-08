
// Setting up Module Aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Vector = Matter.Vector,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events;

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
  collisionFilter: {
    mask: 32
  },
  constraint: {
    stiffness: 1,
    render: {
        visible: false
    }
  }
});

// Setting up variables for constants
var bRadius = 10,
    pRadius = 20,
    bRest = 0.95,
    bFric = 0.001,
    bDensity = 1,
    white = '#F6F7EB',
    green = '#44BBA4',
    blue = '#3F88C5',
    black = '#393E41',
    orange = '#E94F37'

// Ball Rack position
var baPos = [
  // Cue Ball, Ball 1, Ball 2
  [300, 300], [700, 300], [720, 310],
  // Ball 3, Ball 4, Ball 6
  [720, 290], [740, 320], [740, 280],
  // Ball 7, Ball 8, Ball 9
  [760, 330], [760, 310], [760, 290],
  // Ball 10, Ball 11, Ball 12
  [760, 270], [780, 340], [780, 320],
  // Ball 13, Ball 14, Ball 15
  [780, 300], [780, 280], [780, 260],
  // Eight Ball
  [740, 300]
];

// Ball Specs
var cueAttr = { id: 'cBall', label: 'ball', collisionFilter: { category: 32 }, render: { fillStyle: orange },
                restitution: bRest, friction: bFric, density: bDensity};
var blueAttr = { id: 'blue', label: 'ball', render: { fillStyle: blue },
                 restitution: bRest, friction: bFric, density: bDensity};
var greenAttr = { id: 'green', label: 'ball', render: { fillStyle: green },
                  restitution: bRest, friction: bFric, density: bDensity};
var eAttr = { id: 'eBall', label: 'ball', render: { fillStyle: black },
                  restitution: bRest, friction: bFric, density: bDensity};

// Racking Balls
var rack = [];
var rackBalls = function() {
  for (var i = 0; i < baPos.length; i++) {
    if (i === 0) {
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, cueAttr))
    } else if (i === (baPos.length - 1)) {
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, eAttr))
    } else if (i % 2 === 0) {
      greenAttr.id = 'green' + (i / 2).toString();
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, greenAttr))
    } else {
      blueAttr.id = 'blue' + ((i + 1) / 2).toString();
      rack.push(Bodies.circle(baPos[i][0], baPos[i][1], bRadius, blueAttr))
    };
  };
};
rackBalls();

// Bumper Positions
var buPos = [
  // Top Bumper, Bottom Bumper
  [500, 87.5, 850, 25], [500, 512.5, 850, 25],
  // Left Bumper, Right Bumper
  [87.5, 300, 25, 450], [912.5, 300, 25, 450]
];

// Bumper Specs
var bAttr = {
  friction: 0.001,
  isStatic: true,
  restitution: .999,
  frictionStatic: 0.001,
  density: 1,
  render: {
    fillStyle: orange
  }
};

// Building Bumpers
var bumpers = [];
var buildBumpers = function() {
  for (var i = 0; i < buPos.length; i++) {
    bumpers.push(Bodies.rectangle(buPos[i][0], buPos[i][1], buPos[i][2], buPos[i][3], bAttr));
  };
};
buildBumpers();

// Pocket Specs
var poPos = [
  [100, 100], [500, 100], [900, 100],
  [900, 500], [500, 500], [100, 500]
];


var pAttr = {
  isStatic: true,
  isSensor: true,
  label: 'pocket',
  render: {
    fillStyle: 'black'
  }
};

var pockets = [];
var buildPockets = function() {
  for (var i = 0; i < poPos.length; i++) {
    pockets.push(Bodies.circle(poPos[i][0], poPos[i][1], pRadius, pAttr))
  };
};
buildPockets();

// Add Table, Balls and Bumpers to World, start engine + rendering
var gameSetup = function() {
World.add(engine.world, pockets);
World.add(engine.world, rack);
World.add(engine.world, bumpers);
World.add(world, mouseConstraint);
Engine.run(engine);
Render.run(render);
};
gameSetup();

var player1 = {
  isTurn: true,
  isGreen: false,
  isBlue: false,
  hasWon: false,
  scratched: false,
}
var player2 = {
  isTurn: false,
  isGreen: false,
  isBlue: false,
  hasWon: false,
  scratched: false,
}
