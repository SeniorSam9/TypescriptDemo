// no need to say :string, it already can infer
// do not use any
// if void, do not write it
let fname: string;
fname = "Rayan";
console.log(fname);

// numbers, number type include int and float
let age = 23;

// already pasredAge is known to be number
let parsedAge = parseInt("23");

// arrays
let arr: Array<number>;
arr = [1, 2, 3, 5, 7, 9];
let resultedArr = arr.filter((n) => n > 2);
console.log(resultedArr);
let sum = arr.reduce((acc, el) => {
  return acc + el;
});

// enums, make them const for better performance
const enum Color {
  RED,
  BLUE,
  GREEN,
}

// functions, return type comes after the brackets
const swapNums = (num1: number, num2: number) => {
  return [num2, num1];
};

function add(a: number, b: number): number {
  return a + b;
}

const addOptional: Function = (
  a: number,
  b: number,
  optionalC?: number
): number => {
  console.log(optionalC);
  return a + b;
};

function addRest(a: number, b: number, ...c: number[]): number {
  return a + b + c.reduce((acc, el) => acc + el);
}

// genereics, based on whatever Type is passed by the user, all T's are hence replaced the same
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

// classes

class Employee {
  private id?: number;
  private name?: string;
  private address?: string;
  protected static employeesCount: number = 0;

  constructor(id?: number, name?: string, address?: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    Employee.employeesCount++;
  }

  toString(): string {
    return `Employee ${this.name} with address of ${this.address}`;
  }
}

class Manager extends Employee {
  private mDay: Date;

  constructor(id: number, name: string, address: string, mDay: Date) {
    super(id, name, address);
    this.mDay = mDay;
  }
}

let rayan = new Employee(1, "rayan", "34222");
let ahmed = new Employee();
