var snake;
var food;
var S = 20;

function setup(){
    createCanvas(600,600);
    snake = new Snake();
    food = new Food();
    frameRate(7);
    food.picklocation();
}

function draw(){
    background(29);
    snake.update();
    snake.show();
    food.Fshow();
    
}

function mousePressed() {
    snake.total++;
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
    this.total = 0;
    this.snk = [];

    this.dir =  function(x, y ){
        this.xspeed = x;
        this.yspeed = y;
    }




    this.update = function(){

        for(var i = 0; i< this.snk.length-1; i++){
            this.snk[i] = this.snk[i+1];
            
        }
        if(this.total >= 1){
            /* for(var i = this.total -1; i> 0 || i == 0; i--){*/
                this.snk[this.total -1] = createVector(this.x, this.y);
            
        }
        this.x = this.x + this.xspeed*S;
        this.y = this.y + this.yspeed*S;
        
        
        this.x = constrain(this.x, 0, width-S);
        this.y = constrain(this.y, 0, height-S);
    }

    this.show = function(){
        fill(255);
        for (var index = 0; index < this.snk.length; index++) {
            rect(this.snk[index].x, this.snk[index].y, S, S);
            
        }
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