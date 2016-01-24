var bullets = [];

var bulletLength = 0;

var bulletMax = 0;
var bulletSound;

function Bullet(xLocation, yLocation, width, height) {
	this.X = xLocation;
	this.Y = yLocation;
	this.Width = width;
	this.Height = height;
}

function drawBullets() {
	for (var i = 0; i < bulletLength; i++) {
		var bullet = bullets[i];
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(bullet.X, bullet.Y, bullet.Width, bullet.Height);
	}
}

function fireBullet() {
	var midShipX = (ship.X + ship.X + ship.Width) / 2.0;
	var bullet = new Bullet(midShipX, ship.Y, SHIP_WIDTH / 5.0, SHIP_WIDTH / 5.0);
	bullets.push(bullet);
	bulletLength = bulletLength + 1;
    if(bulletLength> bulletMax)
    {
        bulletMax = bulletLength;
        //console.log(bulletMax);
    }
    //bulletSound.play();
	new Audio("Audio/bullet.mp3").play();
}

function moveBullets() {

    
	var length = bullets.length;
	//console.log("Bullet: " + i + ".  Length : "  + length);
	//console.log("My Length : "  + bulletLength + " Their Length : "  + length);

	for (var i = 0; i < bulletLength; i++) {
		var bullet = bullets[i];
		if (bullet.Y < -0) {
			bulletLength = bulletLength - 1;
			bullets.splice(i, 1);
			//console.log("REMOVED : My Length : "  + bulletLength + " Their Length : "  + bullets.length);
		}
        
        var enemyIndex = hasBulletHitAnyEnemy(bullet);
        if(enemyIndex != -1){
            bulletLength = bulletLength - 1;
            bullets.splice(i, 1);
            decreaseEnemyHealth(enemyIndex);
        }
		else {
			if (bullet) {
				bullet.Y = bullet.Y - 10;
				//console.log("Bullet: " + i + ".  Length : "  + length);
			}
		}
	}
}

function hasBulletHitAnyEnemy(bullet){
    for(var i = 0; i <  enemies.length ; i++){
        var hit = hasBulletHitEnemy(bullet, enemies[i]);
        if(hit){
            return i;
        }
    }
    return -1;
}
function hasBulletHitEnemy(bullet, enemy) {
    if(enemies.length == 0 ){
        // no ships, so no collision is possible
        return false;
    }
	else if (bullet.Y > enemies[0].Y + enemies[0].Height) {
		// still below lowest ship, not collision possible
        return false;
	}
    else if (bullet.Y < enemies[enemies.length - 1].Y) {
		// above highest ship, no collision possible
        return false;
	}
	else if (bullet.Y < enemy.Y + enemy.Height) {
		
		var bulletBottomLeft = new Point(bullet.X, bullet.Y + bullet.Height);
		
		if(IsPointInRectangle(bulletBottomLeft, enemy)){
			return true;
		}
		
		var bulletBottomRight = new Point(bullet.X + bullet.Width, bullet.Y + bullet.Height);
		
		if(IsPointInRectangle(bulletBottomRight, enemy)){
			return true;
		}
		
	}
	return false;
}

function IsPointInRectangle(point, rectangle){
	if(point.X >= rectangle.X && point.X <= rectangle.X + rectangle.Width){
		if(point.Y >= rectangle.Y && point.Y <= rectangle.Y + rectangle.Height){
			return true;
		}
	}	
	return false;
}