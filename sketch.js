
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,550,width,20);
	leftSide = new Ground(windowWidth-500,500,20,120);
	rightSide = new Ground(windowWidth-300,500,20,120);
    ball = new Ball(100,10,50)
   
	

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER)
  background("blue");
  
  ground.display()
  leftSide.display()
  rightSide.display()
  ball.display()

  if(keyDown("space")){
      
	Matter.Body.applyForce(ball,{x:200,y:600},{x:0.5,y:-0.05});
}

  drawSprites();
 
}


