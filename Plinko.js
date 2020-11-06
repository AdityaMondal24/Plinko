class Plinko
{
    constructor(x,y,diameter)
    {
        var options={
            isStatic: true
        }

        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }

    display()
    {
        var locus = this.body.position;
        ellipseMode(RADIUS);
        fill(255);
        ellipse(locus.x,locus.y,this.diameter,this.diameter);
    }
}