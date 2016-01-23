var stars = [];
function removeStars() {
    
    
    for(var l = stars.length-1, i = l; i >= 0; i--) {
        if(stars[i].life < 0) {
            stars[i] = stars[stars.length-1];
            stars.length--;            
        }
    }
}



function Star(x, y, speed, dir, life) {
    var _this = this;
    
    this.x = x;
    this.y = y;
    
    var xInc = Math.cos(dir) * speed;
    var yInc = Math.sin(dir) * speed;
    
    
    
    this.life = life;
    
    this.update = function() {
        
        this.x += xInc;
        this.y += yInc;
        
        this.life--;
	}    
}

function drawExplosion() {
    
    removeStars();
    
    for(var i = 0; i < stars.length; i++) {
        
        var s = stars[i];
        var exMod = i % 3;
    	if (exMod == 0)
    	{
    		var explosionColor = "red";
    		
    	}
    	else if (exMod == 1)
    	{
    		var explosionColor = "orange";
    	}
    	else 
    	{
    		var explosionColor = "yellow";
    	}
    	ctx.fillStyle = explosionColor;
        
        ctx.fillRect(s.x-1, s.y-1, 2, 2);
        
        s.update();
    }    
}

function makeStars(coordX, coordY) {
    
    var starAmt = Math.random()*20 + 50;
    
    for(var i = 0; i < starAmt; i++) {
        
        var dir = Math.random()*2*Math.PI;
        var speed = Math.random()*3 + 2;
        var life = Math.random()*10 + 10;
        
        stars[stars.length] = new Star(coordX, coordY, speed, dir, life);
    }
}

var t;
function update() {
    
    if(t != null)
        clearTimeout(t);
    
    
    clear();
    draw();
    
    
    t = setTimeout(update, 500);
    
}
update();

