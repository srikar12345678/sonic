var sonic;
function preload(){
  ground1=loadImage("sonic ground1.png");
  background1=loadImage("sonic background.jpeg");
  sonic1=loadAnimation("sonic 1.png","sonic 2.png","sonic 3.png","sonic 4.png","sonic 5.png");
  
}

function setup() {
  createCanvas(1200,500);
  sonic=createSprite(50, 460, 50, 50);
sonic.shapeColor="blue";
sonic.addAnimation("running",sonic1);
  ground=createSprite(680,490,60,20);
  // ground.x=340;
  ground.velocityX=-5;
  ground.addImage(ground1);
  
  

}


function draw() {
  background(background1);  
  if(ground.x<550){
ground.x=ground.width/2;
  }
  if(keyDown("SPACE")){
    sonic.velocityY=-13;
   
  }
  sonic.velocityY+=0.8;
  sonic.collide(ground) ;
  

  
  drawSprites();
 

}

