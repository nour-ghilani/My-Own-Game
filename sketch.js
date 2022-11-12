var bg, bgImg;
var player;
var side1,side2,side3,side4;
var barYellow, barPink;
var line1,line2,line3,line4;
var ball;
var gameState = 0;
var score = 0;
var cont;
var l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14;
var ll1,ll2,ll3,ll4,ll5,ll6,ll7,ll8,ll9,ll10,ll11,ll12,ll13,ll14;
var line2grp;
var line1grp;
var line3grp;
var line4grp;
var lll1,lll2,lll3,lll4,lll5,lll6,lll7,lll8,lll9,lll10,lll11,lll12,lll13,lll14;
var llll1,llll2,llll3,llll4,llll5,llll6,llll7,llll8,llll9,llll10,llll11,llll12,llll13,llll14;

function preload()
{
  barYellow = loadImage("yellow.png");
  barPink = loadImage("pink.png");

}
function setup() {
  line1grp = new Group();
  line2grp = new Group();
  line3grp = new Group();
  line4grp = new Group();
  createCanvas(950,600);
ball = createSprite(500,500,25,25);
side1 = createSprite(0,0,10,1200);
side2 = createSprite(950,0,10,1200);
side3 = createSprite(0,0,2000,10);
side4 = createSprite(0,600,2000,10);

cont = createSprite(900,565,140,20);

l1 = createSprite(37,325,150,50);
l1.addImage(barYellow);
l1.scale = 0.15;
l2 = createSprite(110,325,150,50);
l2.addImage(barYellow);
l2.scale = 0.15;
l3 = createSprite(183,325,150,50);
l3.addImage(barYellow);
l3.scale = 0.15;
l4 = createSprite(256,325,150,50);
l4.addImage(barYellow);
l4.scale = 0.15;
l5 = createSprite(329,325,150,50);
l5.addImage(barYellow);
l5.scale = 0.15;
l6 = createSprite(402,325,150,50);
l6.addImage(barYellow);
l6.scale = 0.15;
l7 = createSprite(475,325,150,50);
l7.addImage(barYellow);
l7.scale = 0.15;
l8 = createSprite(548,325,150,50);
l8.addImage(barYellow);
l8.scale = 0.15;
l9 = createSprite(621,325,150,50);
l9.addImage(barYellow);
l9.scale = 0.15;
l10 = createSprite(694,325,150,50);
l10.addImage(barYellow);
l10.scale = 0.15;
l11 = createSprite(767,325,150,50);
l11.addImage(barYellow);
l11.scale = 0.15;
l12 = createSprite(840,325,150,50);
l12.addImage(barYellow);
l12.scale = 0.15;
l13 = createSprite(913,325,150,50);
l13.addImage(barYellow);
l13.scale = 0.15;
l14 = createSprite(986,325,150,50);
l14.addImage(barYellow);
l14.scale = 0.15;
line1grp.add(l1);
line1grp.add(l2);
line1grp.add(l3);
line1grp.add(l4);
line1grp.add(l5);
line1grp.add(l6);
line1grp.add(l7);
line1grp.add(l8);
line1grp.add(l9);
line1grp.add(l10);
line1grp.add(l11);
line1grp.add(l12);
line1grp.add(l13);
line1grp.add(l14);

//////////line 2
ll1 = createSprite(37,275,150,50);
ll1.addImage(barYellow);
ll1.scale = 0.15;
ll2 = createSprite(110,275,150,50);
ll2.addImage(barYellow);
ll2.scale = 0.15;
ll3 = createSprite(183,275,150,50);
ll3.addImage(barYellow);
ll3.scale = 0.15;
ll4 = createSprite(256,275,150,50);
ll4.addImage(barYellow);
ll4.scale = 0.15;
ll5 = createSprite(329,275,150,50);
ll5.addImage(barYellow);
ll5.scale = 0.15;
ll6 = createSprite(402,275,150,50);
ll6.addImage(barYellow);
ll6.scale = 0.15;
ll7 = createSprite(475,275,150,50);
ll7.addImage(barYellow);
ll7.scale = 0.15;
ll8 = createSprite(548,275,150,50);
ll8.addImage(barYellow);
ll8.scale = 0.15;
ll9 = createSprite(621,275,150,50);
ll9.addImage(barYellow);
ll9.scale = 0.15;
ll10 = createSprite(694,275,150,50);
ll10.addImage(barYellow);
ll10.scale = 0.15;
ll11 = createSprite(767,275,150,50);
ll11.addImage(barYellow);
ll11.scale = 0.15;
ll12 = createSprite(840,275,150,50);
ll12.addImage(barYellow);
ll12.scale = 0.15;
ll13 = createSprite(913,275,150,50);
ll13.addImage(barYellow);
ll13.scale = 0.15;
ll14 = createSprite(986,275,150,50);
ll14.addImage(barYellow);
ll14.scale = 0.15;
line2grp.add(ll1);
line2grp.add(ll2);
line2grp.add(ll3);
line2grp.add(ll4);
line2grp.add(ll5);
line2grp.add(ll6);
line2grp.add(ll7);
line2grp.add(ll8);
line2grp.add(ll9);
line2grp.add(ll10);
line2grp.add(ll11);
line2grp.add(ll12);
line2grp.add(ll13);
line2grp.add(ll14);
   
////////////////////////////
///////////////line3



lll1 = createSprite(37,227,150,50);
lll1.addImage(barPink);
lll1.scale = 0.13;
lll2 = createSprite(110,227,150,50);
lll2.addImage(barPink);
lll2.scale = 0.13;
lll3 = createSprite(183,227,150,50);
lll3.addImage(barPink);
lll3.scale = 0.13;
lll4 = createSprite(256,227,150,50);
lll4.addImage(barPink);
lll4.scale = 0.13;
lll5 = createSprite(329,227,150,50);
lll5.addImage(barPink);
lll5.scale = 0.13;
lll6 = createSprite(402,227,150,50);
lll6.addImage(barPink);
lll6.scale = 0.13;
lll7 = createSprite(475,227,150,50);
lll7.addImage(barPink);
lll7.scale = 0.13;
lll8 = createSprite(548,227,150,50);
lll8.addImage(barPink);
lll8.scale = 0.13;
lll9 = createSprite(621,227,150,50);
lll9.addImage(barPink);
lll9.scale = 0.13;
lll10 = createSprite(694,225,150,50);
lll10.addImage(barPink);
lll10.scale = 0.13;
lll11 = createSprite(767,225,150,50);
lll11.addImage(barPink);
lll11.scale = 0.13;
lll12 = createSprite(840,225,150,50);
lll12.addImage(barPink);
lll12.scale = 0.13;
lll13 = createSprite(913,225,150,50);
lll13.addImage(barPink);
lll13.scale = 0.13;
lll14 = createSprite(986,225,150,50);
lll14.addImage(barPink);
lll14.scale = 0.13;
line3grp.add(lll1);
line3grp.add(lll2);
line3grp.add(lll3);
line3grp.add(lll4);
line3grp.add(lll5);
line3grp.add(lll6);
line3grp.add(lll7);
line3grp.add(lll8);
line3grp.add(lll9);
line3grp.add(lll10);
line3grp.add(lll11);
line3grp.add(lll12);
line3grp.add(lll13);
line3grp.add(lll14);
   
/////////////////////////////
////////////////line 4

llll1 = createSprite(37,182,150,50);
llll1.addImage(barPink);
llll1.scale = 0.13;
llll2 = createSprite(110,182,150,50);
llll2.addImage(barPink);
llll2.scale = 0.13;
llll3 = createSprite(183,182,150,50);
llll3.addImage(barPink);
llll3.scale = 0.13;
llll4 = createSprite(256,182,150,50);
llll4.addImage(barPink);
llll4.scale = 0.13;
llll5 = createSprite(329,182,150,50);
llll5.addImage(barPink);
llll5.scale = 0.13;
llll6 = createSprite(402,182,150,50);
llll6.addImage(barPink);
llll6.scale = 0.13;
llll7 = createSprite(475,182,150,50);
llll7.addImage(barPink);
llll7.scale = 0.13;
llll8 = createSprite(548,182,150,50);
llll8.addImage(barPink);
llll8.scale = 0.13;
llll9 = createSprite(621,182,150,50);
llll9.addImage(barPink);
llll9.scale = 0.13;
llll10 = createSprite(694,182,150,50);
llll10.addImage(barPink);
llll10.scale = 0.13;
llll11 = createSprite(767,182,150,50);
llll11.addImage(barPink);
llll11.scale = 0.13;
llll12 = createSprite(840,182,150,50);
llll12.addImage(barPink);
llll12.scale = 0.13;
llll13 = createSprite(913,182,150,50);
llll13.addImage(barPink);
llll13.scale = 0.13;
llll14 = createSprite(986,182,150,50);
llll14.addImage(barPink);
llll14.scale = 0.13;
line4grp.add(llll1);
line4grp.add(llll2);
line4grp.add(llll3);
line4grp.add(llll4);
line4grp.add(llll5);
line4grp.add(llll6);
line4grp.add(llll7);
line4grp.add(llll8);
line4grp.add(llll9);
line4grp.add(llll10);
line4grp.add(llll11);
line4grp.add(llll12);
line4grp.add(llll13);
line4grp.add(llll14);
   
/*
for (var l = 37; l<= 913; l = l + 73)
{
  
  line3 = createSprite(l,227,150,50);
   line3.addImage(barPink);
   line3.scale = 0.13;
   if (ball.isTouching(line3))
{
 
}
*/
/*
for(var i = 37; i <= 913; i = i+73 ){

  line4 = createSprite(i,182,150,50);
  line4.addImage(barPink);
  line4.scale = 0.13
 
}}*/
}


function draw() {
  background("black");  
  if(gameState == 0)
  {
    
     background("#301930");
fill("lightblue");
textSize(35);
text("Let's Play",400,150);
fill("#AA336A");
rect(85,222,800,110);
fill("lightblue");
textSize(65);
text("WALL BREAKOUT GAME",100,300);
textSize(35);
text("Press SPACE to start",320,450);

if(keyDown("SPACE"))
    {
     gameState  = 1;
     ball.velocityY = -10;
    ball.velocityX = 4;
 
   }
  
}
    
  if(gameState == 1)
  {
  
    cont.position.x = World.mouseX;
if(ball.isTouching(side1))
{
  ball.bounceOff(side1);
}
if(ball.isTouching(side2))
{
  ball.bounceOff(side2);
}
if(ball.isTouching(side3))
{
  ball.bounceOff(side3);
}
if(ball.isTouching(cont))
{
  ball.bounceOff(cont);
}
if(ball.y>610)
{
  gameState = 2;
}
if(score === 52 )
{
  gameState = 3;
}

first();


fill("lightblue");
textSize(35);
text("Score: " + score,50,100);


  drawSprites();






movement();
}

if(gameState == 3)
{
  
    textSize(50);
    fill("green");
    text("YOU WON!",300,300)
  
}
if(gameState == 2)
{
  fill("red");
  textSize(50);
  text("YOU LOST!",300,300);
}
}

function movement()
{
  if(keyDown("LEFT_ARROW"))
  {
    ball.velocityX  = -6;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    ball.velocityX  = 6;
  }
  if(keyDown("UP_ARROW"))
  {
    ball.velocityY  = -6;
  }
  if(keyDown("DOWN_ARROW"))
  {
    ball.velocityY = 6;
  }
}



 
 function first()
 {
 

  
  if(line1grp.isTouching(ball)){

    for(var i=0;i<line1grp.length;i++){     
         
     if(line1grp[i].isTouching(ball)){
          line1grp[i].destroy();
score = score + 1;
   
          } 
    
    }
   }
   if(line2grp.isTouching(ball)){

    for(var k=0;k<line2grp.length;k++){     
         
     if(line2grp[k].isTouching(ball)){
          line2grp[k].destroy();
score = score + 1;
   
          } 
    
    }
   }
   if(line3grp.isTouching(ball)){

    for(var k=0;k<line3grp.length;k++){     
         
     if(line3grp[k].isTouching(ball)){
          line3grp[k].destroy();
score = score + 1;
   
          } 
    
    }
   }
   if(line4grp.isTouching(ball)){

    for(var k=0;k<line4grp.length;k++){     
         
     if(line4grp[k].isTouching(ball)){
          line4grp[k].destroy();
score = score + 1;
   
          } 
    
    }
   }


 }

