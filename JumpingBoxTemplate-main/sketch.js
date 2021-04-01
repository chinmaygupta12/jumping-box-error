var canvas;
var music;
var rect1,rect2,rect3,rect4,ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

    rect1 = createSprite(100,580,200,40)
    rect1.shapeColor = "cyan"
    rect2 = createSprite(250,580,200,40)
    rect2.shapeColor = "lime"
    rect3 = createSprite(450,580,200,40)
    rect3.shapeColor = "black"
    rect2 = createSprite(650,580,200,40)
    rect2.shapeColor = "yellow"
    ball = createSprite(375,300,30,30)
    ball.shapeColor = "white"
     

}

function draw() {
    background("orange");
    createEdgeSprites();
    keypressed();
    if(rect3.isTouching(ball) && ball.bounceOff(rect3)){
        
        ball.shapeColor = "black"
    }
   
    
     drawSprites();
    //add condition to check if box touching surface and make it box
}

function keypressed(){
    if(keyCode === LEFT_ARROW){
    ball.velocityY = 5
}
}
