var bg,bgImg
var vwall1,hwall2,hwall3,hwall4,hwall5,vwall6,hwall7,vwall8,hwall9,vwall10,hwall11,vwall12,vwall13,hwall4,
hwall5,vwall13;

var w1,w2,w3,w4
var player,playerImg
var edges;
var ghost1,ghost2,ghost3,ghost4,ghost5,ghost6,ghost7
var ghost1Img,ghost2Img,ghost3Img;
var vwall1Img,hwall2Img

function preload(){
  bgImg=loadImage("images/wall2.jpg")
  playerImg=loadImage("images/main char.png")
  ghost1Img=loadImage("images/ghost.png")
  vwall1Img=loadImage("images/wood.png")
  ghost2Img=loadImage("images/ghost2.png")
  hwall2Img=loadImage("images/wood2.png")


  
}

function setup() {
  createCanvas(1280,607);
  edges=createEdgeSprites();
  
  bg=createSprite(600,400)
  bg.addImage(bgImg)
  bg.scale=4



  fill("white")
  
  vwall1=createSprite(300,200,10,370)
  vwall1.addImage(vwall1Img)
  vwall1.scale=1.8
 
  hwall2=createSprite(800,10,400,10)
  hwall2.addImage(hwall2Img)

  hwall3=createSprite(515,480,600,10)
 // hwall3.shapeColor="pink"
  hwall3.addImage(hwall2Img)
  hwall3.scale=2.15
  
  hwall4=createSprite(300,10,600,10)
  hwall4.addImage(hwall2Img)
  hwall4.scale=1.6

  hwall5=createSprite(90,120,180,10)
  hwall5.addImage(hwall2Img)

  vwall6=createSprite(170,320,10,400)
  vwall6.addImage(vwall1Img)
  vwall6.scale=1.9

  hwall7=createSprite(450,380,300,10)
  hwall7.addImage(hwall2Img)
  hwall7.scale=1.5

  vwall8=createSprite(600,325,10,115)
  vwall8.addImage(vwall1Img)
  vwall8.scale=0.6

  hwall9=createSprite(506,270,200,10)
  hwall9.addImage(hwall2Img)

  vwall10=createSprite(410,185,10,170)
  vwall10.addImage(vwall1Img)
  vwall10.scale=0.8

  hwall11=createSprite(480,100,150,10)
  hwall11.addImage(hwall2Img)
  hwall11.scale=0.7
 
  vwall12=createSprite(700,90,10,200)
  vwall12.addImage(vwall1Img)
  vwall12.scale=0.85

  vwall13=createSprite(550,150,10,100)
  vwall13.addImage(vwall1Img)
  vwall13.scale=0.5

  hwall14=createSprite(790,175,200,10)
  hwall14.addImage(hwall2Img)
 
  vwall15=createSprite(730,400,10,200)
 // vwall15.shapeColor="lime"
  vwall15.addImage(vwall1Img)

  vwall16=createSprite(290,560,10,130)
  //vwall16.shapeColor="red"
  vwall16.addImage(vwall1Img)

  hwall17=createSprite(820,300,200,10)
 // hwall17.shapeColor="green"
  hwall17.addImage(hwall2Img)

  vwall18=createSprite(920,350,10,100)
 // vwall18.shapeColor="yellow"
 vwall18.addImage(vwall1Img)
 vwall18.scale=0.6

  hwall19=createSprite(1020,400,200,10)
  //hwall19.shapeColor="black"
  hwall19.addImage(hwall2Img)

  vwall20=createSprite(1040,570,10,100)
 // vwall20.shapeColor="lightblue"
 vwall20.addImage(vwall1Img)
 vwall20.scale=0.7

  hwall21=createSprite(1230,500,120,10)
 // hwall21.shapeColor="purple"
  hwall21.addImage(hwall2Img)

  vwall22=createSprite(1100,100,10,200)
 // vwall22.shapeColor="lightgreen"
 vwall22.addImage(vwall1Img)


  
w1=createSprite(5,200,10,1000)
w2=createSprite(500,610,1000,10)

  
  


  player=createSprite(400,200,20,20)
  player.addImage(playerImg)
  player.scale=0.03

  ghost1=createSprite(800,180,20,20)
  //ghost1.setCollider("rectangle",0,0,ghost1.width,ghost1.height);
  ghost1.addImage(ghost1Img)
  ghost1.scale=0.04
  ghost1.velocity.y=-5
  ghost1.bounceOff(edges)

  ghost2=createSprite(90,400,20,20)
  ghost2.addImage(ghost1Img)
  ghost2.scale=0.04
  ghost2.velocity.x=-5

  ghost3=createSprite(500,200,20,20)
  ghost3.addImage(ghost2Img)
  ghost3.scale=0.04
  ghost3.velocity.x=-5
 
ghost4=createSprite(380,100,20,20)
ghost4.addImage(ghost2Img)
  ghost4.scale=0.04
  ghost4.velocity.y=-13

  ghost5=createSprite(700,580,20,20)
  ghost5.addImage(ghost1Img)
  ghost5.scale=0.04
  ghost5.velocity.y=-2

  ghost6=createSprite(850,400,20,20)
  ghost6.addImage(ghost1Img)
  ghost6.scale=0.04
  ghost6.velocity.y=-10

  ghost7=createSprite(1100,250,20,20)
  ghost7.addImage(ghost2Img)
  ghost7.scale=0.04
  ghost7.velocity.y=-5
  
}


function draw() {
  background(255,255,255); 
  player.collide(edges)
  player.collide(vwall1)

  ghost2.bounceOff(w1)
  ghost2.bounceOff(vwall6)

  ghost3.bounceOff(vwall10)
  ghost3.bounceOff(vwall13)

 ghost4.bounceOff(hwall4)
 ghost4.bounceOff(hwall7)
  
  ghost1.bounceOff(hwall14)
  ghost1.bounceOff(hwall2)

  ghost5.bounceOff(w2)
  ghost5.bounceOff(hwall3)

  ghost6.bounceOff(hwall17)
  ghost6.bounceOff(w2)

  ghost7.bounceOff(hwall19)
  ghost7.bounceOff(vwall22)
  
  
  
  if(keyDown(UP_ARROW)){
    player.y-=10
  }

  if(keyDown(DOWN_ARROW)){
    player.y+=10
  }

  if(keyDown(RIGHT_ARROW)){
    player.x+=10
  }
  
  if(keyDown(LEFT_ARROW)){
    player.x-=10
  }
  
  if(player.isTouching(vwall1)
  || player.isTouching(hwall2)||
  player.isTouching(hwall3)
  ||player.isTouching(hwall4)
  ||player.isTouching(hwall5)
  ||player.isTouching(vwall6)
  ||player.isTouching(hwall7)
  ||player.isTouching(vwall8)
  ||player.isTouching(hwall9)
  ||player.isTouching(vwall10)
  ||player.isTouching(hwall11)
 ||player.isTouching(vwall12)
 ||player.isTouching(vwall13)
 ||player.isTouching(hwall14)
 ||player.isTouching(vwall15)
 ||player.isTouching(vwall16)
 ||player.isTouching(hwall17)
 ||player.isTouching(vwall18)
 ||player.isTouching(hwall19)
 ||player.isTouching(vwall20)
 ||player.isTouching(hwall21)
 ||player.isTouching(vwall22)){
      player.position.y=50
      player.position.x=50
    }

  
  drawSprites();
}