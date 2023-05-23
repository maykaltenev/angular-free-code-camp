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
