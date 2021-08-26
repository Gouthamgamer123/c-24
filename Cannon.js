class Connon
 {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("assets/CANON.png");
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
     
     
    }
    display() 
    {
      fill("#676e6a");
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      rect(-10,-20, this.width,this.height)
      image(this.image, 0, 0, this.width, this.height);
      pop();
      arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    }
  }
  