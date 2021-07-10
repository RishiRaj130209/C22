class Ball{
    constructor(x,y,r){

        var options={
          //isStatic:true,
          restitution:0.5,
          //friction:0,
          //density:1.2

        }

    this.body = Bodies.circle(x,y,r,options)
    this.r = r;
    World.add(world,this.body)
    
     }
    display(){
        push()
        ellipseMode(CENTER)
        fill("white")
        ellipse(this.body.position.x,this.body.position.y,this.r)
        pop()
    }
}