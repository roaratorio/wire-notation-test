class Box {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = 8;
        // this.w = w;
        // this.h = h;
        let options = {
            friction: 0.1,
            restitution: 0.6,
            mass: 0.2,
        }
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle+PI/4);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(0)
        fill(0);
        //rect(0, 0, this.w, this.h);
        ellipse(0, 0, this.r*1.5, this.r*2.0);
        pop();
    }
}