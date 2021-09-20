var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY  

    createredbubble();
    createbluebubble();
    createbullet();

    if(bulletGroup.isTouching(redBubbleGroup)){
      redBubbleGroup.destroyEach();
      bulletGroup.destroyEach();
      score+=5;
    }

    if(bulletGroup.isTouching(blueBubbleGroup)){
      blueBubbleGroup.destroyEach();
      bulletGroup.destroyEach();
      score+=5;
    }

    if(score>=20){
      gameState=2
    }
    
    drawSprites();
  }
  textSize(20);
  fill("red");
  text("Score: "+score,700,50);

  if(gameState===2){
    
    background("black")
    blueBubbleGroup.destroyEach();
    bulletGroup.destroyEach();
    redBubbleGroup.destroyEach()
    textSize(25);
    fill("red");
    text("Game Over!",400,400);
  }
     
}

function createbullet(){

  if(keyDown("space")){

    bullet=createSprite(gun.x,gun.y);
    bullet.addImage(bulletImg);
    bullet.scale=0.2;
    bullet.velocityX=3;
    bulletGroup.add(bullet);
  }
}

function createredbubble(){

if(frameCount%51===0){  
redbubble=createSprite(750,Math.round(random(50,750)));
redbubble.addImage(redBubbleImg);
redbubble.scale=0.1;
redbubble.velocityX=-3;
redBubbleGroup.add(redbubble)
}

}

function createbluebubble(){

if(frameCount%81===0){
bluebubble=createSprite(750,Math.round(random(50,750)));
bluebubble.addImage(blueBubbleImg);
bluebubble.scale=0.08;
bluebubble.velocityX=-3;
blueBubbleGroup.add(bluebubble)
}
}

