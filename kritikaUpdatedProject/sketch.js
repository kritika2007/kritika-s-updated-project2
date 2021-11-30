
var score=0;
var life=3;
var gameState=1;


var asteroidGroup;


 var blast_img1, blast_img2, blast_img3, blast_img4, blast_img5, blast_img6, blast_img7;
 var coin_img, back_img,back2_img,  laser_img, fule_img , asteroid_img1, collided,asteroid_img2, asteroid_img3, player_img;
 var enemy1_img, enemy2_img, life_img, win_img, lose_img, restartball_img, blueball_img;
var laser, laserGroup;
var enemy,enemyGroup;


function preload(){

player_img = loadImage("spaceship.png");
enemy1_img = loadImage("enemy1.gif");
enemy2_img = loadImage("enemy2.gif");


blast_img1 = loadImage("blast1.png");
blast_img2 = loadImage("blast2.png");
blast_img3 = loadImage("blast3.png");
blast_img4 = loadImage("blast4.png");
blast_img5 = loadImage("blast5.png");
blast_img6 = loadImage("blast6.png");
blast_img7 = loadImage("blast7.png");

collided = loadAnimation("blast1.png","blast2.png","blast3.png","blast4.png","blast5.png","blast6.png","blast7.png" );

laser_img= loadImage("laser_attack.png")
life_img = loadImage("pixel_heart.png");
coin_img = loadImage("coin.png");
fule_img = loadImage("fuel.png");

back_img = loadImage("bgtrack.jpg");
back2_img = loadImage("bg2.jpg");
asteroid_img1 = loadImage("astroid1.png");
asteroid_img2 = loadImage("astroid2.png");
asteroid_img3 = loadImage("astroid3.png");
redball_img = loadImage("enemy_spaceship_attack.png");
blueball_img = loadImage("enemy_spaceship_attack1.png");
win_img = loadImage("win.png");
lose_img = loadImage("game_over.png");
bgMusic= loadSound("bgmusic.mp3");
attackSound= loadSound("attack_sound.wav");
blastmp3= loadSound("blast.wav");
}

function setup() {

canvas = createCanvas(displayWidth, displayHeight);

space = createSprite(width/2,height/2,width,height);
space.addImage(back_img);
space.velocityY = 3;



spaceship = createSprite(width/2,height-100);
spaceship.addImage(player_img);
spaceship.scale = 0.5;


laserGroup= new Group();
asteroidGroup= new Group();
enemyGroup= new Group();


//bgMusic.loop();
 


}

function draw(){
background(back_img);
drawSprites();

//reset the background

if(space.y > height){
    space.y = height/2;
}

if(keyDown("left")){
    spaceship.x -=3;


}
if(keyDown("right")){
    spaceship.x +=3;

    
}
if(keyDown("space")){
    shoot();
}
spawnAsteroids();

if(asteroidGroup.isTouching(laserGroup)){
laser.addImage(blast_img1)
laser.changeImage(blast_img1)
asteroidGroup.destroyEach();
blastmp3.play();
laser.scale=4;
laser.velocityY=0
laser.lifetime=50
}




    
}


function shoot(){
    laser= createSprite(spaceship.x,spaceship.y,10,10);
    laser.addImage(laser_img);
    laser.velocityY=-5;
    attackSound.play();
    laser.lifetime=200;
    laserGroup.add(laser);
    laser.scale=0.1;
}

function spawnAsteroids(){
    if(frameCount % 80  === 0){
        asteroid= createSprite(Math.round(random(50,width-50)),0,10,10);
        
        var rand = Math.round(random(1,3));

        switch(rand){
            case 1:asteroid.addImage(asteroid_img1);
                    break;
            case 2:asteroid.addImage(asteroid_img2);
                      break;
            case 3:asteroid.addImage(asteroid_img3);
                      break; 
                      
            default:break;
        }
        asteroid.velocityY= 4;
        asteroid.lifetime=200;
        asteroidGroup.add(asteroid);


    }
  
}

// enemy function 

function spawnEnemy(){
   if (frameCount % 80 === 0){
    enemy = createSprite(Math.round(random(50,width-50)),0,10,10);

    var rand = Math.round(random(1,2));

    switch(rand){
          case 1 : enemy.addImage(enemy1_img);
                   break;
         case 2 : enemy.addImage(enemy2_img);
                   break;
         default:break;
        }
      
        enemy.velocityY =4;
        enemy.velocityX= 200;
        enemyGroup.add(enemy);


    }


}







