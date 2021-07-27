var ground;
var ironMan, ultron;
var ironManImg1, ironManImg2, ultronImg1, ultronImg2,spaceImg;
function preload(){
  ironManImg1 = loadImage("ironman1.png");
  ironManImg2 = loadImage("ironman2.png");
  spaceImg = loadImage("spaceImg.png");
  ultronImg1 = loadImage("ultron1.png");
  ultronImg2 = loadImage("ultron2.png");
}

function setup() {
  createCanvas(1000,600);
  ground = createSprite(500, 580, 800, 20);
  ironMan = createSprite(50,280,20,10);
  ironMan.addImage("ironManFlying",ironManImg1);
  
  //ground.addImage("bgImg",spaceImg);
}

function draw() {
  background("yellow");  
  ground.velocityX = -2;
  if(ground.x<0){
    ground.x = ground.width/2
  }
if(keyDown(UP_ARROW)){
  ironMan.y = ironMan.y-2
}
if(keyDown(DOWN_ARROW)){
  ironMan.y = ironMan.y+2
}
  drawSprites();
}

function spawnUltrons(){
  if(frameCount%30===0){
    ultron = createSprite(1000,300,20,20);
    ultron.addImage("ultronFlying",ultronImg1);
    ultron.velocityX = -4
    ultron.y = Math.round(random(50,500));
  }
}
