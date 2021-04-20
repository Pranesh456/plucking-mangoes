
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	treeimg=loadImage("Plucking mangoes/tree.png");
	boyimg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground= new Ground();
	stones=new  Stone(100,460,23)
	mango1= new Mango(600,290,34)
	mango2= new Mango(855,325,35)
	mango3= new Mango(670,260,35)
	mango4= new Mango(730,300,35)
	mango5= new Mango(710,320,36)
	mango6= new Mango(780,250,35)
	mango7= new Mango(825,170,33)
	mango8= new Mango(880,260,35)
	mango9= new Mango(940,220,35)
	mango10= new Mango(980,305,35)

	attach=new Throw (stones.body,{x:100,y:465});

	/*tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyimg)
	boy.scale=0.125*/
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  fill("black");
  textSize(18);
  image(treeimg,420,38, 600, 600);
  image(boyimg,50,425, 250, 250);
  
  stones.display();
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

 detectCollison(stones,mango1);
 detectCollison(stones,mango2);
 detectCollison(stones,mango3);
 detectCollison(stones,mango4);
 detectCollison(stones,mango5);
 detectCollison(stones,mango6);
 detectCollison(stones,mango7);
 detectCollison(stones,mango8);
 detectCollison(stones,mango9);
 detectCollison(stones,mango10);


}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollison(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x<lmango.diameter + lstones.diameter
		&&lmango.body.position.x - lstones.body.position.x<lmango.diameter + lstones.diameter
		&&lstones.body.position.y- lmango.body.position.y<lmango.diameter + lstones.diameter
		&&lmango.body.position.y - lstones.body.position.y<lmango.diameter + lstones.diameter){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}