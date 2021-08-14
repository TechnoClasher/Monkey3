var Monkey,banana,jungle,stone
var Monkey_running, foodGroup , obstacleGroup
var banana_img,jungleimg,stone_img, ground
var score = 0

function preload() {
Monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_img = loadImage("banana.png");
  
  stone_img = loadImage("stone.png");
  
  jungleimg =loadImage("jungle.jpg");
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
  
}


function setup() {
  createCanvas(700, 400);
  jungle = createSprite(0,0,800,400)
  jungle.addImage("jungleimg",jungleimg);
  jungle.scale = 1.5;
  jungle.x = jungle.width/2;
  jungle.velocityX= -4
  
  ground = createSprite(400,350,800,10);
  ground.x = ground.width/2
  ground.velocityX = -4;
  ground.visible = false;
  
  Monkey = createSprite(100,340,20,50);
  Monkey.addAnimation("monkeyanimation",Monkey_running)
  Monkey.scale = 0.1;
  
  

  
}

function draw() {
  background(220);
  if(jungle.x < 100){
    jungle.x = jungle.width/2
  }
  
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  
  if(foodGroup.isTouching(Monkey)){
    foodGroup.destroyEach()
    score = score + 2;
    
  }
  
  switch(score){
    case 10: Monkey.scale = 0.12;
    break;
    case 20: Monkey.scale = 0.14;
    break;
    case 30: Monkey.scale = 0.16;
    break;
    case 40: Monkey.scale = 0.18;
    break;
    default:break
     
 }
    
    if (keyDown("space")){
      Monkey.velocityY = -12;
    }
      Monkey.velocityY = Monkey.velocityY+0.8;
      
    Monkey.collide(ground);
     spawnFood();
    spawnObstacle();
   
      if(obstacleGroup.isTouching(Monkey)){
        Monkey.scale = 0.08  
      }
  
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score " + score,500,50);
  
  
}

function spawnFood(){
  if (frameCount % 80 === 0){
    banana = createSprite(600,250,40,10);
    banana.y = random(150,250);
    banana.addImage(banana_img);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 140;
    Monkey.depth = banana.depth+1;
    
     
    foodGroup.add(banana);
    
  }
} 
  
function spawnObstacle(){
  if (frameCount % 300 === 0){
    stone = createSprite(700,350,10,40);
    stone.addImage(stone_img);
    stone.scale = 0.2
    stone.velocityX = -6;
    stone.lifetime = 140;
    
    obstacleGroup.add(stone); 
    
    
  }
}