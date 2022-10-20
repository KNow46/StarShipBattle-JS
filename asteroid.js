class asteroid
{
	constructor(x, y, damage, speedx,speedy, src, hp, istnieje = true) {
		this.x = x;
		this.y = y;
		this.damage = damage;
		this.speedx = speedx;
		this.src = src;
		this.hp = hp;
		this.istnieje = istnieje;
		this.speedy = speedy;
	}
	move(speed) {
		this.y += speedy;
		this.x += speedx;
	}
}
const asteroids=[];