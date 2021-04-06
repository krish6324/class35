var ball;
var database;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var dbref=database.ref('ball/position');
    dbref.on("value",readPos)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
*/
function writePos(x,y){
    var dbref=database.ref('ball/position')
    dbref.set({
        'x':position.x+x,
        'y':position.y+y

    })
}
function readPos(data){
    position=data.val();
    console.log(position.x);
    ball.x=position.x;
    ball.y=position.y;


}
