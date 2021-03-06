
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var pentagon;
var slingshot;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	ground1 = new Ground(390,260,220,10)

    
	block1 = new Box(330,235,30,40)
	block2 = new Box(360,235,30,40)
	block3 = new Box(390,235,30,40)
	block4 = new Box(420,235,30,40)
	block5 = new Box(450,235,30,40)
	block6 = new Box(360,195,30,40)
	block7 = new Box(390,195,30,40)
	block8 = new Box(420,195,30,40)
	block9 = new Box(390,155,30,40)

	pentagon = new Polygon(50,200,30);
	slingshot = new Slingshot(pentagon.body,{x:100 , y:200});
	
    Engine.run(engine);
    Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  pentagon.display();
  slingshot.display();
  ground1.display();
 
}
function mouseDragged()
{
Matter.Body.setPosition(pentagon.body,{x:mouseX , y:mouseY});
}

function mouseReleased()
{
slingshot.fly();
}




