
function onAnyKeyDown(e) {
    //console.log("DOWN");

    // We only care about space, left and right arrow.
    if (e.keyCode != SPACE_CODE && e.keyCode != LEFT_ARROW_CODE && e.keyCode != RIGHT_ARROW_CODE) {
        return;
    }

    keysdown[e.keyCode] = true;

    e.preventDefault(); // prevent the default action (scroll / move caret)
}

function onAnyKeyUp(e) {
    keysdown[e.keyCode] = false;
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
$(document).ready(function () {

    setCanvasAndContext();

    ship = new Ship(0, canvas.height - SHIP_WIDTH, SHIP_WIDTH, SHIP_WIDTH);

    createEnemies();
    //enemy = new Enemy(50, 50, ENEMY_WIDTH, ENEMY_WIDTH, 10);

    bulletSound = new Audio("Audio/bullet.mp3"); // buffers automatically when created

    // draw updates and move the bullets
    window.setInterval(function () {
        //draw();
    }, TIME_INTERVAL);

    animate();
    window.setInterval(function () {
        //moveBullets();
    }, TIME_INTERVAL);

    window.setInterval(function () {
        //advanceEnemies();
    }, 100);
    

    // capture key down events 
    $(document).keydown(function (e) {
        onAnyKeyDown(e);
    });
    
    //capture key up event
    $(document).keyup(function (e) {
        onAnyKeyUp(e);
    });
    
    //see if we are moving
    window.setInterval(function () {
        //checkMovement();
    }, 1);

    // see if we have fired our weapons
    window.setInterval(function () {
        //checkFire();
    }, 100);
});