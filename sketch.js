var monkey, ground, monkeyImg, groundImg, bananaGroup, obstacleGroup, bananaImg, obstacleImg, backgroundIMG, score,backimage,banana;


function preload(){
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backgroundIMG = loadImage("jungle.jpg"); 
  bananaImg = loadImage("Banana.png");
  obstacleImg = loadImage("stone.png");
  groundImg = loadImage("ground.jpg");
}


function setup() {
  createCanvas(600,300);
  backImage = createSprite(width,height); 
  backImage.addImage(backgroundIMG);
  if(ground.x <0 ){
    ground.x = ground.width/2;
  }
  ground.visible = false; 
  monkey.addAnimation(monkeyImg);
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
  monkey.scale = 0.12; 
}


function draw(){
 background(255); 
  if(backImage.x <0){
     backImage.x = backImage.width/2
     }
  if(monkey.istouching(bananaGroup)){
   score = score + 2; 
    bananaImg.destroy(); 
  }
  switch(score){
      case 10: monkey.scale = 0.12;
      break; 
      case 20: monkey.scale = 0.12;
      break; 
      case 30: monkey.scale = 0.12;
      break; 
      case 40: monkey.scale = 0.12;
      break; 
      default: break; 
  }
    if(obstacleGroup.isTouching(monkey)){
      monkey.scale = 0.12;
    }
      drawSprites();
      stroke("white");
      textSize(20);
      fill("white");
      text("Score: " + score,500,50);
    
    
  Bananas();
  Obstacles();
}

function Bananas() {
  if(World.frameCount % 80 === 0){
    var banana = createSprite(400,randomNumber(120,200),10,10);
    banana.velocityX = -10 ;
    banana.addImage("bananaImg");
    banana.scale = 0.05;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
}
function Obstacles (){
 if(World.frameCount % 300 === 0 ){
   var obstacle = createSprite(400,330,10,10);
   obstacle.velocityX = -10;
   obstacle.collide(ground);
   obstacle.addImage("obstacleImg");
   obstacle.scale = 0.15;
   obstacle.lifetime = 150;
   obstacleGroup.add(obstacle);
 }
}

