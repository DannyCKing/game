var enemy;

var enemyImg =  new Image();
enemyImg.onload = function(){
	  for (var i = 0; i < enemies.length; i++) {
        drawEnemy(enemies[i]);
    }
}

var ENEMY_WIDTH = 40;

var ENEMY_HEIGHT = 40;

var STARTING_ENEMY_HEALTH = 10;

var enemies = [];

var MULTIPLIER = 5;

function Enemy(xLocation, yLocation, width, height, startingHealth) {
    this.X = xLocation;
    this.Y = yLocation;
    this.Width = width;
    this.Height = height;
    this.StartingHealth = startingHealth;
    this.Health = this.StartingHealth;
    this.Alive = true;
}

function drawEnemies() {
    //console.log(enemies.length);
    for (var i = 0; i < enemies.length; i++) {
        drawEnemy(enemies[i]);
    }
}

function drawEnemy(enemy) {
    if (!enemy.Alive)
        return
    //console.log(enemy);
    //ctx.fillStyle = "#0000FF";
    //ctx.fillRect(enemy.X, enemy.Y, enemy.Width, enemy.Height);
	ctx.drawImage(enemyImg, enemy.X, enemy.Y, enemy.Width, enemy.Height);
	enemyImg.src = "img/enemy.png";
}

function createEnemies() {
    for (var i = 0; i < level; i++) {
        for (var j = 0; j < MULTIPLIER; j++) {
            createEnemyInSection(j, i);
        }
    }
}

function createEnemyInSection(section, row) {
    var xLoc = (section + 1) * sectionWidth;
    var yLoc = 0 - ((ENEMY_HEIGHT + 10) * row);
    var enemy = new Enemy(xLoc, yLoc, ENEMY_WIDTH, ENEMY_HEIGHT, STARTING_ENEMY_HEALTH);
    enemies.push(enemy);
}

function advanceEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].Y = enemies[i].Y + 1;
    }
}

function decreaseEnemyHealth(i) {
    //console.log("hit");

    var enemy = enemies[i];
    enemy.Health = enemy.Health - 1;
    if (enemy.Health <= 0) {
        //console.log("Killed");
        enemies.splice(i, 1);
        
        if(enemies.length == 0){
            levelUp();
        }
    }
}
