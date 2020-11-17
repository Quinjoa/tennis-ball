//Matter.js - World, Engine, Bodies
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, object;

var ball;


function setup() {
createCanvas(1200,800);

//create the engine
engine = Engine.create();

//add engine to the world
world = engine.world;

var options = { 
isStatic: true


}



//create the bodies
object = Bodies.rectangle(100,780,60,80,options)
World.add(world, object);
var size = {

  isStatic:false,
    restitution: 1.0
  }

ball = Bodies.circle(600,400,20,size);

//add body to the world

World.add(world, ball);
 
console.log(object);
}

function draw() {
  background(0);  
Engine.update(engine);



rectMode(CENTER);
  rect(object.position.x,object.position.y,2400,15 )


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}