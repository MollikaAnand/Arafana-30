class Slingshot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.1, //changes made
			length:10
			
		}
		
	
		this.pointB = anchor
		this.launcher = Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA = body;
	}

	fly()
	{
		this.launcher.bodyA = null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA = this.launcher.bodyA.position; //changes Made
			var pointB = this.pointB
		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}