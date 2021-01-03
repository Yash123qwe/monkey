var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var road;
var banana2;

var PLAY=1;
var END=0;
var gamestate = PLAY;
var bananagroup;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);
  //monkey
  monkey = createSprite(25, 320, 10, 10)
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1

  //banana
 // banana = createSprite(200, 200, 20, 20)
  //banana.addAnimation("bananaImage", bananaImage)
  //banana.scale = 0.1
  //banana.velocityX = -4

  //road
  road = createSprite(15, 350, 1300, 10)
  road.velocityX = -4;
  road.x = road.width /2;
  
  //invisible
  invisroad = createSprite(339,329, 1300, 10)
  invisroad.visible = false;
  
  monkey.setCollider("circle", 0, 0, 60);

   score = 0;
  bananagroup = createGroup()
  obstacleGroup = createGroup();
}



function draw() {
  background(220);
  text("Score: "+ score, 200,50);
  
   if(gamestate === PLAY){ 
 
     console.log(monkey.y)
     
  if (keyDown("space") && monkey.y >= 314) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
     
 
   
   if (road.x < 0){
     road.x = road.width/2;
   }

  
   score = score + Math.round(getFrameRate()/60);
    console.log(getFrameRate())
     
      banana2();
     obstacle();
     
     
     if(obstacleGroup.isTouching(monkey)){
       gamestate=END
     }
   }
     else if (gamestate === END){
      
       bananagroup.setLifetimeEach(0)
       bananagroup.setVelocityXEach(0)
       obstacleGroup.setVelocityXEach(0)
       score=0
   }
  
   
   monkey.collide(invisroad);
  drawSprites();
 
      
}

function banana2() {
  if (frameCount % 130 === 0) {
    banana3 = createSprite(620, 250, 20, 20);
    banana3.y = Math.round(random(210, 240))
    banana3.addAnimation("bananaImage", bananaImage);
    banana3.scale = 0.1;
    banana3.velocityX = -4;
    banana3.lifeTime = 200;
    
    bananagroup.add(banana3)
  }
}

function obstacle() {
  if (frameCount % 60 === 0) {
    obstacle2 = createSprite(620, 325, 20, 20);
    obstacle2.addAnimation("obstaceImage", obstaceImage);
    obstacle2.scale = 0.1;
    obstacle2.velocityX = -4;
    obstacle2.lifeTime = 200;
    obstacleGroup.add(obstacle2)
  }
}