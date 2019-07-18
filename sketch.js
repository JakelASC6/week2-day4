posX= 25
posY= 25
myspeed=5
let enemyx,enemyy;
let enemywidth=50,enemyheight=50;
let myleft,myright,mytop,mybottom;
let enemyleft,enemyright,enemytop,enemybottom;
let points=0;

let clefairy;
let togepi;


function setup(){
    createCanvas(500,500);
    background(0);

    rectMode(CENTER);
    textSize(25)
    enemyx= random(25,475);
    enemyy= random(25,475);
    //lod in images
    clefairy=loadImage("clefairy.png")
    togepi=loadImage("togepi.png")
}

function draw(){
    
    
    background(0);
    image(togepi,enemyx,enemyy,enemywidth,enemyheight)
    image(clefairy,posX,posY,50,50)
    //draw the enemy
    // fill(255,0,0)
    // rect(enemyx,enemyy,enemywidth,enemyheight);
    // //DRAW YOURSELF
    // fill(0,0,255);
    // rect(posX,posY,50,50);
    
    //IF THE LEFT ARROW IS PRESSED
    if(keyIsDown(LEFT_ARROW)){
        posX-=myspeed
        
    }
    if (keyIsDown(RIGHT_ARROW)){
        posX+=myspeed
    }

    if (keyIsDown(UP_ARROW)){
        posY-=myspeed
    }

    if(keyIsDown(DOWN_ARROW)){
        posY+=myspeed
    }

    //restrict myself with the canvas
    if (posX<=25){
        posX=25
    }
    if (posX>=475){
        posX=475
    }
    if (posY<=25){
        posY=25
    }
    if (posY>=475){
        posY=475
    }

        //know my edges
    myleft=posX-25
    myright=posX+25
    mytop=posY-25
    mybottom=posY+25

    enemyleft=enemyx-25
    enemyright=enemyx+25
    enemytop=enemyy-25
    enemybottom=enemyy+25
    //detect collision or rather noncollision
    if(myleft>enemyright|| myright<enemyleft||mytop>enemybottom||mybottom<enemytop){
        //do nothing
    
    }
    else{
        //there is collision
        console.log("It's a trap!")
        points++;
        //text on the canvas    
        fill(random(255),random(255),random(255));
        text("It's a trap!",255,480)
        // createCanvas(0)
        // fill(255,0,0)
        // rect(enemyx,enemyy,enemywidth,enemyheight);
        enemyx= random(25,475);
        enemyy= random(25,475);
    }


    fill(255);
    text("enemies collected "+points,200,25);










}