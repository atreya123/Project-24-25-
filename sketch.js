
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var line1,line2,line;
var ball;
var engine,world;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(500,380,1000,20);
//line1=new Dustbin(750,350,200,10);
line2=new Dustbin(750,290,200,180);
//line3=new Dustbin(850,308,10,100);
ball=new Paper(100,350,30,30);


	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ball.display();
  ground.display();
  
   //line1.display();
  line2.display();
  //line3.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce( ball.body,ball.body.position,{x:40,y:-40});
	}
 }



