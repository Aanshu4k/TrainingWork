// const india={
//     name:'The Country India',
//     date:1947,
//     details:{
//         flag:'Tricolored',
//         currency:'INR',
//         printDetails() {
//             console.log(`The Flag is ${this.flag} and the currency is ${this.currency} `);//this keyword can only access the value within a context
//             //hence the value of say ${this.name} here will be undefined 
//         },

//     }
// }
// india.details.printDetails()

//IN this context, this is now bound to the instance of the country 
function Country(_name, _date) {
    this.name = _name;
    this.date = _date;
    this.describe = function () {
        console.log(`${this.name} got its independence on ${this.date}`);
    }
}
const india = new Country('The Country India', 1947);//initialized Constructor
india.describe();