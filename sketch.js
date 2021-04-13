var Garden,Garden_Image;
var jerry,jerry1,jerry_teasing,jerry4;
var tom,tom1,tom_running,tom4;

function preload() {
  Garden_Image = loadImage("images/garden.png");

   jerry1 = loadImage("images/mouse1.png");
   jerry_teasing = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerry4 = loadImage("images/mouse4.png");

   tom1 = loadImage("images/cat1.png");
   tom_running = loadAnimation("images/cat2.png" , "images/cat3.png");
   tom4 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    Garden = createSprite(500,400,1000,800);
    Garden.addImage(Garden_Image); 

    tom = createSprite(850,570,800,800)
    tom.addImage(tom1);
    tom.addAnimation("running",tom_running);
    tom.addImage("last",tom4)
    tom.scale = 0.2;
    

    jerry = createSprite(250,600,0,0)
    jerry.addImage(jerry1);
    jerry.addAnimation("teasing",jerry_teasing);
    jerry.addImage("last",jerry4);
    jerry.scale = 0.2;

    

}

function draw() {
    background(255);
    text(mouseX + ',' + mouseY,10,45);

    if(tom.isTouching(jerry)){
       tom.changeAnimation("last",tom4);
       jerry.changeAnimation("last",jerry4);
       tom.velocityX = 0;
    }
    drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.changeAnimation("running" , tom_running);
    jerry.changeAnimation("teasing",jerry_teasing);
 } 
} 





