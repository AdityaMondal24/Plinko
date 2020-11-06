class Particles
{
    constructor(x,y,diameter)
    {
        var options={
            restitution: 0.4,
            density: 0.1
        }

        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display()
    {
        var locus = this.body.position;
        var angle = this.body.angle;

        push();
        translate(locus.x,locus.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
    }
}