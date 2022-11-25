
ctx.font = "15px Arial";

window.onload = start();
function start()
{
	
}

let frame = 0;
//main drawing function
setInterval(DrawEverything, 1000 / 60);
function DrawEverything()
{
	DrawBackgroud(frame);
	DrawStarships(frame);
	DrawMissiles(frame);
	DrawAsteroids(frame);
	//playGIF();
	frame++;
	if (frame >= 59)
		frame = 0;
}

function DrawBackgroud(frame) {
	//ctx.fillStyle = "gray";
	const background = new Image();
	background.src = "graphic/background.png";
	ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);
}

const shipIMG = new Image();
shipIMG.src = "graphic/ship.gif";
const shootIMG = new Image();
shootIMG.src = "graphic/shipShoot.gif";
function DrawStarships(frame)
{
	
	//playGIF(shipIMG, "shipshoot", X, Y, shipWidth, shipLength, 2, frame, shootingSpeed * 0.5);
	if (frame % 10 < 5)
	ctx.drawImage(shootIMG, X, Y, shipWidth, shipLength);
	
	ctx.drawImage(shipIMG, X, Y, shipWidth, shipLength);
}

function DrawMissiles(frame)
{
	for (let i = 0; i < missiles.length; i++) {
		if (missiles[i].istnieje == true) {

			const missileIMG = new Image();
			missileIMG.src = missiles[i].src;
			ctx.drawImage(missileIMG, missiles[i].x, missiles[i].y, 30, 60);
			
		}
	}
}
function DrawAsteroids(frame)
{
	
	ctx.rotate(0.2);
	for (let i = 0; i < asteroids.length; i++)
	{
		if (asteroids[i].istnieje == true)
		{
			const asteroidIMG = new Image();
			asteroidIMG.src = asteroids[i].src;
			ctx.drawImage(asteroidIMG, asteroids[i].x, asteroids[i].y, 100, 100);
		}
	}
	ctx.rotate(-0.2);

}

//to use that function all frames should be in one folder
//parameter src - name of that folder
//files in folder have to be named 0.gif, 1.gif, 2.gif...
//@frames means all gif files in folder
//@x,y - position of image
//@width, height - parameters of image
//NEED FIX, SOMETIMES OBJECT FLASHES
function playGIF(IMG,src, x, y, width, height, frames, currentframe, speed)
{

			IMG.src = src + "/" + Math.floor(currentframe/speed) % frames + ".gif";
			
	ctx.drawImage(IMG, x, y, width, height);

}