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
    const expected = 3;

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
  
  //Vien Test
  it ("when 9 return 8", () =>{

	//Arrange
	const input = 9;
	const expected = 3;

	//Act
	const actual: number = Fibonacci(input);

	//Assert
	expect(actual).toBe(expected); 
        
    })

    //Ranju test
    it('when 21 return 13', () => {
        const input = 21;
        const expected = 3;
        const actual:number = Fibonacci(input);
        expect(actual).toBe(expected);
    })
});
