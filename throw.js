class Throw{

    constructor(bodya,pointb){
    var op ={
        bodyA:bodya,
        pointB:pointb,
        stiffness:0.4,
        length:10
    }
    this.chain=Matter.Constraint.create(op);
    World.add(world,this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }       
        }
        fly(){
            this.chain.bodyA=null;
        }
        Launch(body){
            this.chain.bodyA=body;
        }
}