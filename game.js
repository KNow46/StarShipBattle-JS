const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let shootingSpeed = 10;

//board dimensions
const canvasWidth = 1000;
const canvasHeight = 700;

const shipWidth = 140;
const shipLength = 140;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let money = 0;
let X= -shipWidth / 2 + canvasWidth / 2;//ship x location;
let Y = canvasHeight - shipLength;//ship Y location;

//ship move function
canvas.onmousemove = function (event)
{
	X = event.clientX - shipWidth/2 + 5;
	Y = event.clientY- shipLength/2 + 5;
}

//let shootingFunctionOn = false;
//window.addEventListener("keydown", shoot)
//function shoot(event)
//{
//            shootingFunctionOn = true;  
//}
let mCounting = 0;
setInterval(createplayerMissiles, 1000/20);
function createplayerMissiles()
{
	if (mCounting % 5 == 0) {
		missiles.push(new missile(X + 22, Y, 1, "player", 0, -20,"graphic/missile.gif", true));
		missiles.push(new missile(X + 88, Y, 1, "player", 0, -20, "graphic/missile.gif", true));
		//missiles.push(new missile(X + 55, Y, 1, "player", 0, -20, "graphic/missile.gif", true));
	}
	for (let i = 0; i < missiles.length; i++)
	{
		missiles[i].move();
	}
	for (let i = 0; i < missiles.length; i++)
	{
		//removing unnecessary missiles
		if (missiles[0].y < -30)
		{
			console.log(missiles.length);
			missiles.shift();

        }
	}
	mCounting++;
	if (mCounting > 30)
		mcounting = 0;
	//asteroids and missiles collision
	for(let i = 0; i < missiles.length; i++)
	{
		for (let j = 0; j < asteroids.length; j++)
		{
			if (asteroids[j].istnieje == true && missiles[i].istnieje == true)
			if ( missiles[i].x > asteroids[j].x && missiles[i].x < asteroids[j].x + 80 && missiles[i].y > asteroids[j].y && missiles[i].y < asteroids[j].y + 70)
			{
				asteroids[j].getshoot(missiles[i].damage);
				missiles[i].istnieje = false;
            }
		}
	}
	

}
//two variables necessary to determine asteroids spawn speed
let asteroidframecount = 0;
let asteroidsSpawnSpeed = 15; // inversly proportional

setInterval(asteroidsfun, 1000 / 25);
function asteroidsfun() {
	if (asteroidsSpawnSpeed - asteroidframecount == 0)
	{
		asteroids.push(new asteroid(Math.random() * canvasWidth, -100, 5, 0, 5, "graphic/asteroid.gif", 1, true));
	}
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].move(asteroids[i].speedx, asteroids[i].speedy);
	}
	for (let i = 0; i < asteroids.length; i++) {
		//removing unnecessary asteroids
		if (asteroids[0].y > canvasHeight + 100) {
	
			//asteroids.shift();

		}
	}
	asteroidframecount++;
	if (asteroidframecount > asteroidsSpawnSpeed)
		asteroidframecount = 0;

}


