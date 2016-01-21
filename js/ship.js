var SHIP_WIDTH = 30;

var ship;

var shipImg = new Image();
shipImg.onload = function(){
	ctx.drawImage(shipImg, ship.X, ship.Y, ship.Width, ship.Height);
}
var SPACE_CODE = 32;

var LEFT_ARROW_CODE = 37;

var RIGHT_ARROW_CODE = 39;

var MOVEMENT_INTERVAL = 1;

var STEPS = 20;

var keysdown = {};


function Ship(xLocation, yLocation, width, height) {
	this.X = xLocation;
	this.Y = yLocation;
	this.Width = width;
	this.Height = height;
}

function drawShip() {
	//ctx.fillStyle = "#00FF00";
	//ctx.fillRect(ship.X, ship.Y, ship.Width, ship.Height);
	ctx.drawImage(shipImg, ship.X, ship.Y, ship.Width, ship.Height);
	shipImg.src = "img/ship.png";
}

function moveRight() {
	if (ship.X > canvas.width - SHIP_WIDTH)
		return;
	ship.X = ship.X + MOVEMENT_INTERVAL;
}

function moveLeft() {
	if (ship.X <= 0)
		return;
	ship.X = ship.X - MOVEMENT_INTERVAL;
}

function checkMovement() {
	if (keysdown[37])
		moveLeft();
	if (keysdown[39])
		moveRight();
}

function checkFire() {
	if (keysdown[32])
		fireBullet();
	if (keysdown[37])
		moveLeft();
	if (keysdown[39])
		moveRight();
}