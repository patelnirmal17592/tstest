import Fibonacci from "./Fibonacci";

describe("Fibonacci Tests", () => {
  it("when 5 return 3", () => {
    //Arrange
    const input = 5;
    const expected = 3;

    //Act
    const actual: number = Fibonacci(input);

    //Assert
    expect(actual).toBe(expected);
  });

  //Nirmal's test

  it("when 3 return 2", () => {
    const input = 3;
    const expected = 2;

    const actual: number = Fibonacci(input);

    expect(actual).toBe(expected);
  });

  //Brandon's test
  it("when 15 return 3", () => {
    const input = 15;
    const expected = 3;

    const actual: number = Fibonacci(input);

    expect(actual).toBe(expected);
  });
});

// import Fibonacci from './Fibonacci';

// describe('Fibonacci Tests', () => {

//     it("when 5 return 3", () => {

//         //Arrange
//         const input = 5;
//         const expected = 3;
//         //Act

//         const actual: number = Fibonacci(input);

//         //Assert
//         expect(actual).toBe(expected);
//     })

//     it("when 6 return 8", () => {

//         //Arrange
//         const input = 6;
//         const expected = 8;
//         //Act

//         const actual: number = Fibonacci(input);
//         //Assert

//         expect(actual).toBe(expected);
//     })
// })
