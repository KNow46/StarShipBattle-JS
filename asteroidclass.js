class asteroid {
	constructor(x, y, damage, speedx, speedy, src, hp, istnieje = true) {
		this.x = x;
		this.y = y;
		this.damage = damage;
		this.speedx = speedx;
		this.src = src;
		this.hp = hp;
		this.istnieje = istnieje;
		this.speedy = speedy;
	}
	move(speedx, speedy) {
		this.y += speedy;
		this.x += speedx;
	}
	getshoot(damage)
	{
		this.hp -= damage;
		if (this.hp < 0)
			this.istnieje = false;
	}
}
const asteroids = [];