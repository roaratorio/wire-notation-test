class Snowflake{
  
  constructor(){
    let x = random(20, width-220);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector();
    this.r = random(8, 10);
    this.notecolour = random(1);
    this.noteFill = 0;
    this.angle = 0;
    //if random is greater than 0.5, give it a value of 1, if not give it a value of -1.
    this.dir = (random(1) > 0.5) ? 1: -1;
    //let r2 = random(1);
    //this.body = Bodies.circle(this.pos.x, this.pos.y, this.r);
            let options = {
              //collisionFilter: { group: Snowflake },
              //collisionFilter: 1,
            // friction: 0.1,
               restitution: 0.5,
            //isStatic: fixed
        }
        this.body = Bodies.circle(this.pos.x, this.pos.y, this.r,  options);
        
      // console.log("Creating particle with mass:", this.mass);
      //   //Body.setDensity(this.body, this.mass);
         //World.add(world, this.body);
  }
  
  applyForce(force){
    
    //Parallax Effect
    let f = force.copy();
    f.mult(this.body.r);
    // let f = force.copy();
    // f.div(this.mass);
    this.acc.add(force);
  }
  
  //this function is used to randomly create a snowflake once one has gone off the screen
  randomize(){
    let x = random(50, width-220);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector();
    this.notecolour = random(1);
    this.noteFill = 0;
    this.r = random(8, 12);
                let options = {
            // friction: 0.1,
            // restitution: 0.5,
            //isStatic: fixed
        }
        this.body = Bodies.circle(this.pos.x, this.pos.y, this.r,  options);
    
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);
    this.pos.add(this.vel);
    //this.acc.mult(0);
    
    //if the flake moves off the screen it is repurposed.
    if(this.pos.y > height + this.r){
      this.randomize();
    }
    // randomly choose the direction that the notes rotate
    this.angle += this.dir*this.r*0.001;
  
  }
  
  render(){
    //print(this.notecolour);
    if(this.notecolour > 0.2){
      
      this.noteFill = 0;
    }
    else{
      this.noteFill = 255;
    }
  fill(this.noteFill);
    stroke(1);
   // strokeWeight(this.r);
    strokeWeight(2);
    //fill(duration);
    push()
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    translate(0, 0);
    //ellipse(this.pos.x, this.pos.y, this.r, this.r+this.r/4);
    ellipse(0, 0, this.r, this.r+this.r/3);
    // this.angle += this.r*0.001;
    pop();
    
  }
  
  offScreen(){
    return (this.pos.y > height+ this.r);
  }
  
}