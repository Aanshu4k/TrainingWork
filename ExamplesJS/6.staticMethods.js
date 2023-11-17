class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){//mostly static is used where reusablity is required
        const dx=a.x-b.y;
        const dy=a.y-b.y;
        return Math.hypot(dx,dy);
    }
}
const p1=new Point(5,5);
const p2=new Point(10,10);
// console.log(p1.distance);   undefined
console.log(Point.distance(p1,p2));