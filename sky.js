class BackgroundGradient {
  constructor() {
    this.increment = 0;
    //sunset
    // this.color1 = color(237, 132, 84);
    // this.color2 = color(243, 190, 102);
    
    //night
    this.color1 = color(50, 58, 106);
    this.color2 = color(50, 58, 116);
    
    this.pausedColor1 = this.color1;
    this.pausedColor2 = this.color2;
    this.isPaused = false;
    this.lightHeight = 150; //scale the streetlight img
    this.ellipseFillChange = 0;
    this.light1color = color(205, 217, 225);
    this.light2color = color(205, 217, 225);
    this.light3color = color(205, 217, 225);
  }


  show() {

    if (!this.isPaused && frameCount % 10 == 0) {
      //sunset to night
      // this.color1 = lerpColor(this.color1, color(50, 58, 106), 0.025);
      // this.color2 = lerpColor(this.color2, color(50, 58, 116), 0.025);
      
      //night to sunrise
      this.color1 = lerpColor(this.color1, color(237, 132, 84), 0.025);
      this.color2 = lerpColor(this.color2, color(243, 190, 102), 0.025);
    }

    this.setGradient(0, 0, width, height, this.color1, this.color2, "Y");
    noStroke();
    fill(205, 217, 225);
    ellipse(width - 100, 230, 50, 50);
    strokeWeight(2);
    stroke(50);


    this.increment = 0;
    fill(50);
    rect(width-15, 250, 15, height);
    //ellipse(mouseX, mouseY, 50, 50);
    print(mouseY);
    
    
    fill(50);
    for (let i = 0; i < 5; i++) {
      rect(width - 25, 99 + this.increment, 25, 3);
      this.increment += 15;
    }
    
    //switch street lights off with 'l' key
    
        if (this.ellipseFillChange >= 1) {
      // this.light1color = color(247, 247, 121);
        this.light1color = color(205, 217, 225);
      //fill(247, 247, 121);
     } 
          //else {
    //   fill(205, 227, 215);
    // }
    
    if (this.ellipseFillChange >= 2){
      //this.light2color = color(247, 247, 121);
      this.light2color = color(205, 217, 225);
    }
    
        if (this.ellipseFillChange >= 3){
      //this.light3color = color(247, 247, 121);
      this.light3color = color(205, 217, 225);
    }
    
              else if(this.ellipseFillChange == 0) {
        // this.light1color = color(205, 217, 225);
        // this.light2color = color(205, 217, 225);
        // this.light3color = color(205, 217, 225);
        
        this.light1color = color(247, 247, 121);
        this.light2color = color(247, 247, 121);
        this.light3color = color(247, 247, 121);
    }


    noStroke();

    //change the fill for these ellipses when the 'l' key is pressed...
    fill(this.light1color);
    ellipse(71, 248, 13, 10);
    fill(this.light2color);
    ellipse(127, 306, 11, 8);
    fill(this.light3color);
    ellipse(176, 347, 8, 5);

    //streetlight.resize(0, this.lightHeight);
//     rect(150, 410, 3, 100)
    imageMode(CENTER);

    image(streetlight, 50, 315);
    
    image(streetlight2, 110, 360);

    image(streetlight3, 166, 380);
    
  }

  setGradient(x, y, w, h, c1, c2, axis) {
    noFill();

    if (axis == "Y") {
      for (let i = y; i <= y + h; i++) {
        const inter = map(i, y, y + h, 0, 1);
        const c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis == "X") {
      for (let j = x; j <= x + w; j++) {
        const inter2 = map(j, x, x + w, 0, 1);
        const d = lerpColor(c1, c2, inter2);
        stroke(d);
        line(j, y, j, y + h);
      }
    }
  }

  keyPressed() {
    if (keyCode === 32) {
      this.isPaused = !this.isPaused;
      if (this.isPaused) {
        this.pausedColor1 = this.color1;
        this.pausedColor2 = this.color2;
      }
    }
    
        if (key === "l") {
      this.ellipseFillChange++;
      if (this.ellipseFillChange > 3) {
        this.ellipseFillChange = 0;
      }
    }
  }
  
}

