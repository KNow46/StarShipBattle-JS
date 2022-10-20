class missile {
	constructor(x, y, damage, origin, speedx, speedy, src, istnieje = true) {
		this.x = x;
		this.y = y;
		this.damage = damage;
		this.origin = origin;
		this.speedx = speedx;
		this.src = src;
		this.istnieje = istnieje;
		this.speedy = speedy;
	}
	move() {
		this.y += this.speedy;
		this.x += this.speedx;
	}
	

}
const missiles = [];