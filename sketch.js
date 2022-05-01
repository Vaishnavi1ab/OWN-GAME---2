var bgImg,bg,girl,girlImg;
var butterfly1Img,butterfly,butterflyImg,butterfly1;
var sunflowerImg,sunflower;


function preload(){

  bgImg = loadImage("assets/bg.png");
  girlImg = loadImage("assets/girl.png")
   butterflyImg = loadImage("assets/butterfly.png")
  butterfly1Img = loadImage("assets/butterfly1.png")
sunflowerImg = loadImage("assets/sunflower.png")

  butterGroup = createGroup();
  sunflowerGroup = createGroup();
  

}




function setup() {
  createCanvas(800,400);

  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgImg)
  bg.scale=1.3
  
  girl = createSprite(400, 200, 20, 20);
  girl .addImage(girlImg)
  girl.scale=0.4
  
  sunflower = createSprite(girl.x-54,girl.y-50)
      sunflower.addImage(sunflowerImg)
      sunflower.scale=0.09;

}

function draw() {


 

  background(0);  


  sunflower.x=girl.x-54
  sunflower.y=girl.y-50
if(keyDown("UP_ARROW")){
  girl.y-=3
}


if(keyDown("DOWN_ARROW")){
  girl.y+=3
}


if(keyWentDown("space")){
  butterfly1 .addImage(butterfly1Img)
}


if(keyWentUp("space")){
  butterfly1 .addImage(butterfly1Img)
}


if(keyDown("RIGHT_ARROW")){
  girl.x+=3
}


if(keyDown("LEFT_ARROW")){
  girl.x-=3


}

createbutterfly();

createbutterfly1();




drawSprites();

}



function createbutterfly(){

  if(frameCount % 60===0){
    butterfly = createSprite(300, 100, 20, 20);
    butterfly.addImage(butterflyImg)
    butterfly.scale=0.2
  
    butterfly.x=random(width-400,width);
    butterfly.y=random(300,height-300)
    butterfly.velocityX=-4;
    butterfly.lifetime=width/4;
  
}
  }


  function createbutterfly1(){

    if(frameCount % 80===0){
      butterfly1 = createSprite(width-90, 100, 20, 20);
      butterfly1 .addImage(butterfly1Img)
      butterfly1.scale=0.2
      butterfly1.x=random(width-400,width);
      butterfly1.y=random(300,height-300)
      butterfly1.velocityX=-4;
      butterfly1.lifetime=width/4;
     
}
    }


    function createSunflower(){
   
     
      
      
      
      
      sunflower.lifetime=width/4;
      sunflowerGroup.add(sunflower);
  }