var canvas;

var ctx;

// A variable to store the requestID.
var requestId;

var isCurrentlyDrawing = false;

var TIME_INTERVAL = 1000 / 60;

var leftWall;

var rightWall;

var sectionWidth;

var SECTIONS = 6.0;

var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

function clear() {
    if (ctx) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.clearRect(ship.X, ship.Y, ship.Width, ship.Height);
        // if(enemies > 0)
        // {
        //     var lastIndex = enemies.length - 1;
        //     var x = enemies[0].X;
        //     var y = enemies[lastIndex].y;
        //     if( y < 0 )
        //     {
        //         y = 0;
        //     }
        //     var width = enemies[lastIndex].X + enemies[lastIndex].Width - x;
        //     var height = enemies[0].Y + enemies[0].Height - y;
        //     ctx.clearRect(x, y, width, height);
        // }
    }
}

function animate() {
     
    now = Date.now();
    delta = now - then;
     
    if (delta > interval) {
    clear();
    
    moveBullets();
    checkMovement();
    advanceEnemies();
    checkFire();
    //decreaseEnemyHealth(0);
    drawBullets();
    drawEnemies();
    drawShip();
    drawExplosion();
    isCurrentlyDrawing = false;
    }
    window.requestAnimationFrame(animate);
    //requestAnimationFrame(draw);
}

function setCanvasAndContext() {
    canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    sectionWidth = canvas.width / SECTIONS;
    leftWall = sectionWidth;
    rightWall = canvas.width - sectionWidth;
}

