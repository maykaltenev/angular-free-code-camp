import { isNumericLiteral } from "typescript";

let lname = "John";
lname = "Santosh";
let age: number;

age = 25;
age = 25.5;
let isValid: boolean = false;
let newname = lname.toUpperCase();
let empList: string[];
let depList: Array<string>;
let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;

let swapNumber: [firstNumber: number, secondNumber: number];

function swapNumbers(num1, num2): [number, number] {
  return [num2, num2];
}
swapNumbers[0];

let department = "IT";

function add(num1: number, num2: number) {
  return num1 + num2;
}
