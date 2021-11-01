var sofia;
var cardboar1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, carboard8, cardboard9, cardboard10;
var cardboar11, cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20;
var carboard21, cardboard22;
var cup;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 Sofia = createSprite(25,15,20,15);
Sofia.shapeColor = "blue";

 cardboard1 = createSprite(90,61,30,75);
cardboard1.shapeColor = "brown";

 cardboard2 = createSprite(129,171,30,75);
cardboard2.shapeColor = "brown";

 cardboard3 = createSprite(194,72,30,75);
cardboard3.shapeColor = "brown";

 cardboard4 = createSprite(86,279,30,75);
cardboard4.shapeColor = "brown";

 cardboard5 = createSprite(275,79,30,75);
cardboard5.shapeColor = "brown";

 cardboard6 = createSprite(369,70,30,75);
cardboard6.shapeColor = "brown";

 cardboard7 = createSprite(206,215,30,75);
cardboard7.shapeColor = "brown";

cardboard8 = createSprite(77,394,60,30);
cardboard8.shapeColor = "brown";

cardboard9 = createSprite(296,200,25,50);
cardboard9.shapeColor = "brown";

cardboard10 = createSprite(301,290,30,60);
cardboard10.shapeColor = "brown";

cardboard11 = createSprite(145,274,20,50);
cardboard11.shapeColor = "brown";
 
cardboard12 = createSprite(135,347,30,50);
cardboard12.shapeColor = "brown";
 
cardboard13 = createSprite(198,322,30,50);
cardboard13.shapeColor = "brown";

cardboard14 = createSprite(191,396,70,30);
cardboard14.shapeColor = "brown";
 
cardboard15 = createSprite(278,396,70,30);
cardboard15.shapeColor = "brown";
 
cardboard16 = createSprite(357,182,30,50);
cardboard16.shapeColor = "brown";

cardboard17 = createSprite(358,255,15,30);
cardboard17.shapeColor = "brown";
 
cardboard18 = createSprite(61,129,15,30);
cardboard18.shapeColor = "brown";

cardboard19 = createSprite(45,195,15,30);
cardboard19.shapeColor = "brown";
 
cardboard20 = createSprite(6,254,15,70);
cardboard20.shapeColor = "brown";

cardboard21 = createSprite(8,341,15,70);
cardboard21.shapeColor = "brown";
 
 cardboard22 = createSprite(348,370,15,80);
cardboard22.shapeColor = "brown";
 
cup = createSprite(381,350,20,20);
cup.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  

  Sofia.velocityX = 0;
  Sofia.velocityY = 0;

  if (keyDown("DOWN_ARROW")) {
    Sofia.velocityX=0;
    Sofia.velocityY=5;
  }

  if (keyDown("RIGHT_ARROW")) {
    Sofia.velocityX=3;
    Sofia.velocityY=0;
  }

  if (keyDown("UP_ARROW")){
    Sofia.velocityX=0;
    Sofia.velocityY=-5;
  }

  if (keyDown("LEFT_ARROW")){
    Sofia.velocityX=-3;
    Sofia.velocityY=0;
  }
  
  if (Sofia.collide(cup)) {
    textSize(25);
    stroke(255);
    text("You win",195,195);
  }
  
  createEdgeSprites();
  Sofia.bounceOff(edges);
  Sofia.bounceOff(cardboard1);
  Sofia.bounceOff(cardboard2);
  Sofia.bounceOff(cardboard3);
  Sofia.bounceOff(cardboard4);
  Sofia.bounceOff(cardboard5);
  Sofia.bounceOff(cardboard6);
  Sofia.bounceOff(cardboard7);
  Sofia.bounceOff(cardboard8);
  Sofia.bounceOff(cardboard9);
  Sofia.bounceOff(cardboard10);
  Sofia.bounceOff(cardboard11);
  Sofia.bounceOff(cardboard12);
  Sofia.bounceOff(cardboard13);
  Sofia.bounceOff(cardboard14);
  Sofia.bounceOff(cardboard15);
  Sofia.bounceOff(cardboard16);
  Sofia.bounceOff(cardboard17);
  Sofia.bounceOff(cardboard18);
  Sofia.bounceOff(cardboard19);
  Sofia.bounceOff(cardboard20);
  Sofia.bounceOff(cardboard21);
  Sofia.bounceOff(cardboard22);
  drawSprites();
}