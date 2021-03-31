class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.blabla = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y]
    this.blabla.push(position)
    for(var i=0;i<this.blabla.length;i=i+1 ){
      image(this.smokeImage,this.blabla[i][0],this.blabla[i][1])
    }
  }
}
