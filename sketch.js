
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,leftside,rightside,groundobj;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStaic : false,
	restitution:03,
	friction:0,
	density:1.2
}
ball = Bodies.circle(260,100/2,ball_options);
World.add(world,ball)

groundobj = new Ground(Width/2,670,Width,20)
leftside = new Ground(1100,600,20,120)
rightside = new Ground(1350,600,20,120)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellispe(ball.position.x,ball.position.y,radius,radius);
  groundobj.display()
  leftside.display()
  rightside.display()
  drawSprites(); 

 
}
function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

