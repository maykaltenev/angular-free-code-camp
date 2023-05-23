function add(num1: number, num2: number, num3?: number) {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));

const sub = (num1: number, num2: number): number => num1 - num2;

const multiply = function (num1: number, num2: number): number {
  return num1 - num2;
};
function getItems<Type>(item: Type[]): Type[] {
  return new Array<Type>().concat(item);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5, 6]);

let concatString = getItems<string>(["a", "b", "c", "d", "e"]);

class Employees {
  private idPrivate: number;
  protected lastName: string;
  id!: number;
  name!: string;
  address!: string;

  constructor(id: number, name: string, address: string) {
    this.address = this.address;
    this.id = id;
    this.name = name;
  }

  getNameWithAddress(): string {
    return `${this.name} stays  at ${this.address}`;
  }
}

let john = new Employees(1, "john", "Highway 72");
john.id = 1;
john.name = "John";
john.address = "Highway 71";
let address = john.getNameWithAddress();

console.log(john);
