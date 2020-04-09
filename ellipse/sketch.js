let test;
let elements = [];
let ceiling = 60;
function setup() {
  canvasWidth = 800;
  canvasHeight = 600;
  createCanvas(canvasWidth, canvasHeight);
  ellipseSize = 0;
  ellipseOpacity = 1;
  frameCounter = 0;
  // 10% margin
  ceiling = ceiling - (ceiling * 0.10);
  elements.push(new simpleEllipse(10, 10, 100, 1));
}

function draw() {
  background(0);
  for(let i = 0; i < elements.length; i++){
    elements[i].done(function(birth){
      console.log('dead');
      elements[i] = new simpleEllipse(10, 10, 100, 1);
      if(elements.length < ceiling){
        elements.push(new simpleEllipse(10, 10, 100, 1));
      }
    }, function(){
     elements[i].animate();
     elements[i].display();
    });
  }

}

class simpleEllipse {
  constructor(x, y, size, opacity){
    this.x = Math.floor(Math.random() * canvasWidth);
    this.y = Math.floor(Math.random() * canvasHeight);
    this.opacity = opacity;
    this.size = size;
  }

  animate() {
    this.size = this.size +1;
    this.opacity = this.opacity - 0.005;
    if(this.opacity < 0) {
      this.opacity = 0;
      this.dead = true;
    }
  }
  done(callback, notdone){
    if(this.dead){
      callback();
    }
    else{
      notdone();
    }
  }
  display() {
    stroke("rgba(255,255,255," + this.opacity + ')');
    fill(0,0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
