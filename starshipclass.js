class starship
{
	constructor(x, y, maxhp, currhp, istnieje = true, owner)
	{
		this.x = x;
		this.y = y;
		this.maxhp = maxhp;
		this.currhp = currhp;
		this.istnieje = istnieje;
		this.owner = owner;
	}
	getHit(damage)
	{
		this.currhp -= damage;
	}
	shoot()
	{
		missiles.push(new missile(X + 22, Y, 1, "player", -10, -20, "missile.gif", true));
		missiles.push(new missile(X + 88, Y, 1, "player", 10, -20, "missile.gif", true));
		missiles.push(new missile(X + 55, Y, 1, "player", 0, -20, "missile.gif", true));
	}
}
class oneCannonship extends starship
{
	shoot()
	{
		missiles.push(new missile(this.x, this.y, 1, owner, 0, -20, "missile.gif", true));
	}
    
}
