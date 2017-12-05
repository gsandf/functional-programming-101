// Lambdas
// Functions as first-class citizens
// Higher Order Functions
// Pure Functions
// Single Responsibility Principle
// Closures
// Currying
// Composition
// Immutability



// OOP *not guaranteed to be accurate
class Civic extends Honda {
  constructor() {
    this.price = price;
    this.color = color;
  }

  method() {
    // that does something
  }
}
const civ1 = new Civic(price, color)


// FP
const civic = (price, color, honda) => {
  return {
    ...honda,
    color,
    price
  }
}
const civ2 = civic(price, color, honda)

// imperative control-flow or `how` to do something
for(let i = 0; i < list.length; i++) {
  // do stuff to data here
  list[i]
}

// declarative data-flow or `what` to do
data
  .map(employees)
  .filter(active)
  .reduce(totalUXSpecialists)




  







// lambda
// ES5-
function apples(department) { return department.employee }
// ES6+
department => department.employee
// not a lamda
const filterEmployees = department => department.employee

// pure functions
// ES5-
function add(x,y) { return x + y }
// ES6+
const add = (x,y) => x + y
// not pure
let a = 1
const add = (x,y) => (x + y) + a
add(2,3)


// composition
const total = 10
// ES5-
function add1(x) { return x + 1 }      // x => x + 1
// ES6+
const add5 = x => x + 5                // x => x + 5
const add6ToTotal = add1(add5(total))  // 16

// currying
const add = x => a => a + x  // x => a => a + x
const add1 = add(1)          // a => a + 1
add1(10)                     // 11


// shared state
// With shared state, the order in which function calls are made
// changes the result of the function calls.
const x = {
  val: 2
};

const x1 = () => x.val += 1;

const x2 = () => x.val *= 2;

x1();
x2();

console.log(x.val); // 6

// This example is exactly equivalent to the above, except...
// ...the order of the function calls is reversed...
x2();
x1();

// ... which changes the resulting value:
console.log(x.val); // 5

// solution: clone, then operate on the data
const x = {
  val: 2
};
// ES5-
const x1 = x => Object.assign({}, x, { val: x.val + 1});
// ES6+
const x2 = x => ({ ...x, val: x.val * 2});
// *composition again*
console.log(x1(x2(x)).val); // 5

const y = {
  val: 2
};

// Because the functions don't mutate, you can call these
// functions as many times as you want, in any order,
// without changing the result of other function calls.
x2(y);
x1(y);
// *composition again*
console.log(x1(x2(y)).val); // 5

// higher order Functions
function addRandomNum(num) {  // addRandomNum is a higher order function
  return function(num2) {     // this is a lambda function
    return num + num2
  }
}
data.map(x => x.toString())   // map is a higher order function w/ a lamda









function(employee) { return employee.speciality === 'HEART' }
employee => employee.speciality === 'HEART'

function(accumulator, current) { return accumulator + current.years }
(accumulator, current) => accumulator + current.years





const getTotalYearsHeartXP = department =>
  department.map(employees)
            .filter(speciality)
            .reduce(totalYearsXP, 0)

function getTotalYearsHeartXP(department) {
  let employees =[], specialty = [], totalYears = 0;

  for(let i = 0; i < department.length; i++) {
    if(department[i].employee) {
       employees.push(department[i].employee)
     }
  }

  for(let j = 0; j < employee.length; j++) {
    if(employee[j].speciality === 'HEART') {
      specialty.push(employee[j])
    }
  }

  for(let k = 0; k < specialty.length; k++) {
    totalYears += specialty[k].years
  }

  return totalYears
}


// OOP / FP
class Car {
  constructor() {
    this.wheels = wheels;
    this.fuel = fuel;
  }

  turnLeft(){}

  turnRight(){}

}

const AlicesCar = new Car()



// Imperative / Declaritive
