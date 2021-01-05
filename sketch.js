const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling"
var engine, world;
var PolImg;
var bol;

function preload() {
  PolImg = loadImage("polygon.png")

}


function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(600,350,300,20);
  ground2 = new Ground(900,250,200,20);

  block1 = new Block(600,260,40,50)
  block2 = new Block(640,260,40,50)
  block3 = new Block(680,260,40,50)
  block4 = new Block(560,260,40,50)
  block5 = new Block(520,260,40,50)
  block6 = new Block(560,200,40,50)
  block7 = new Block(600,200,40,50)
  block8 = new Block(640,200,40,50)
  block9 = new Block(600,150,40,50)
  block10 = new Block(720,260,40,50)
  block11 = new Block(480,269,40,50)
  block12 = new Block(520,200,40,50)
  block13 = new Block(680,200,40,50)
  block14 = new Block(560,150,40,50)
  block15 = new Block(640,150,40,50)
  block16 = new Block(600,100,40,50)

  bloock1 = new Block(900,210,40,50)
  bloock2 = new Block(940,210,40,50)
  bloock3 = new Block(980,210,40,50)
  bloock4 = new Block(860,210,40,50)
  bloock5 = new Block(820,210,40,50)
  bloock6 = new Block(900,150,40,50)
  bloock7 = new Block(940,150,40,50)
  bloock8 = new Block(860,150,40,50)
  bloock9 = new Block(900,90,40,50)


  

  bol = Bodies.circle(100,100,100)
  World.add(world,bol)

  rope = new Rope(this.bol,{x:50,y:200});
}

function draw() {
  background(0);
  
  Engine.update(engine);
  
  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  bloock1.display();
  bloock2.display();
  bloock3.display();
  bloock4.display();
  bloock5.display();
  bloock6.display();
  bloock7.display();
  bloock8.display();
  bloock9.display();

  rope.display();

  drawSprites();

  imageMode(CENTER)
  image(PolImg,bol.position.x,bol.position.y,50,50)
}

function mouseDragged(){
   Matter.Body.setPosition(this.bol, {x: mouseX , y: mouseY});
 }