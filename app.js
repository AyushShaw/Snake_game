var snake;
var food;
var S = 20;

function setup(){
    createCanvas(600,600);
    snake = new Snake();
    food = new Food();
    frameRate(9);
    food.picklocation();
}

function draw(){
    background(29);
    snake.update();
    snake.show();
    food.Fshow();
    
}

function keyPressed(){

    if (keyCode === UP_ARROW)
        {
            snake.dir(0,-1)
        }
    else if (keyCode === DOWN_ARROW)
        {
            snake.dir(0,1)
        }
    else if (keyCode === RIGHT_ARROW)
        {
            snake.dir(1,0)
        }
    else if (keyCode === LEFT_ARROW)
        {
            snake.dir(-1,0)
        }

}


function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    
    this.dir =  function(x, y ){
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function(){
        this.x = this.x + this.xspeed*S;
        this.y = this.y + this.yspeed*S;

        this.x = constrain(this.x, 0, width-S);
        this.y = constrain(this.y, 0, height-S);
    }

    this.show = function(){
        fill(255);
        rect(this.x, this.y, S, S);
    }
}

function Food() {
    var col = floor(width/S);
    var row = floor(height/S);
    var F;
    
    this.picklocation  = function(){
        F = createVector(floor(random(col)), floor(random(row)));
        F.mult(S);
    }
    
    this.Fshow  = function(){
        fill(255, 0, 100,);
        rect(F.x,F.y , S, S);
    }

}