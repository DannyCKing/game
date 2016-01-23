var canvas;

var ctx;

var TIME_INTERVAL = 10;

var leftWall;

var rightWall;

var sectionWidth;

var SECTIONS = 6.0;

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

function draw() {
    //requestID = requestAnimationFrame(animate);
    //requestAnimFrame(draw);
    
    
    clear();
    if (ctx) {
        drawBullets();
        drawEnemies();
        drawShip();
    	drawExplosion();
    }
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

