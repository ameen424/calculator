// Union Types and Literal Types  and Type Aliases

// usong Type Aliases we can declare data types using "type" word

type combinable = number | string;
type conversionDescription = string;

function combine(
  n1: combinable,
  n2: combinable,
  resultConversion: conversionDescription
  // n1: number | string,
  // n2: number | string,
  // resultConversion: string // 'as-number' | 'as-text'
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("4", "24", "as-number");
console.log(combinedStringAges);

const combineNames = combine("ameen", "prince", "as-text");
console.log(combineNames);

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age: number;
}

const user1: UserInterface = {
  id: 1,
  name: "ameen",
  age: 22,
};

// Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number; // we can use private or protected
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "shaik");
const mike = new Person(2, "ameen");

console.log(brad.register());
console.log(brad, mike);

// SubClasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

let emp = new Employee(3, "jack", "developer");

console.log(emp.register());
