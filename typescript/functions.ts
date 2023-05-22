function add(num1: number, num2: number, num3?: number) {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));

const sub = (num1: number, num2: number): number => num1 - num2;

const multiply = function (num1: number, num2: number): number {
  return num1 - num2;
};
