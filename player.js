class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.direction = 'still';
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still'
      //don't move anything
      break;
      case 'up':
      
        //decrease y pos
        break;
      case 'down':
        //increase y pos
        break;
      case 'right':
        //increasing the x pos
        break;
      case 'left':
        //decreasing x pos
        break;
    }

  }

}
