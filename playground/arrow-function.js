var square = (x) => {
    var result = x*x;
    return result;
};
console.log(square(9));
//----------------------
var user = {
    name: 'Vin',
    sayHi: () => {
        console.log(arguments);//wont work with arrow functions
        console.log(`Hi. I'm ${this.name}`); //this keyword won't work in Arrow function
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`); 
    }
};

user.sayHiAlt(1,2,3);