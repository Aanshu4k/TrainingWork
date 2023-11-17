class Country{
    constructor(name,date)//parameterized constructor
    {
        //initialized the class data
        this.name=name;
        this.date=date;
    }
    describe(){
        console.log(`${this.name} got its independence on ${this.date}.`);
    }
}
const india=new Country("The Country India", 1947);
india.describe();