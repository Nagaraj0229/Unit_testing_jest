import { test, it, expect } from "vitest";
import { add } from "./sum";
// TEST:1
test("should all number values in an array", () => {
  //arrange
  const numbers = [1, 2, 3, 4, 5];

  //act
  const result = add(numbers);

  //assert
  const expectedResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );
  expect(result).toBe(15);
  expect(result).toBe(expectedResult);
});

// TEST:2
it("should yield NaN if a least one invalid number is provided ", () => {
  //arrange
  const inputs = ["invalid", 1];

  //act
  const result = add(inputs);

  // assert
  expect(result).toBeNaN();
});

// TEST:3
it("should yield a corerct sum if an array numeric string value is provided ", () => {
  //arrange
  const numbers = ["1", "2", "3", "4", "5"];

  //act
  const result = add(numbers);

  // assert
  const expectedResult = numbers.reduce(
    (preValue, curValue) => +preValue + +curValue,
    0
  );
  // expect(result).not.toBeNaN()
  expect(result).toBe(expectedResult);
});

// TEST:4
it("should yield 0 if an empty array is provided ", () => {
  //arrange
  const numbers = [];

  //act
  const result = add(numbers);

  //assert
  expect(result).toBe(0);
});

// TEST:5

it("should throw an error if no values passed into the function ", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

// TEST:6
it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow(/is not iterable/);
});
