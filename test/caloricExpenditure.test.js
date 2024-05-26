const CaloricExpenditureService = require('../services/CaloricExpenditureService');

describe('CaloricExpenditureService', () => {
  let service;

  beforeEach(() => {
    service = new CaloricExpenditureService();
  });

  test('calculates caloric expenditure for a male', () => {
    //Given 
    const person = { gender: 'male', weight: 70, age: 30 };
    //When
    const caloricExpenditure = service.calculate(person);
    //Then
    expect(caloricExpenditure).toBeCloseTo(1617.5); 
  });

  test('calculates caloric expenditure for a female', () => {
    //Given
    const person = { gender: 'female', weight: 60, age: 25 };
    //When
    const caloricExpenditure = service.calculate(person);
    //Then
    expect(caloricExpenditure).toBeCloseTo(1376.5); 
  });

  test('throws error if gender is missing', () => {
    //Given
    const person = { weight: 70, age: 30 };
    // Then
    expect(() => {
        //When
      service.calculate(person);
    }).toThrow('Missing required fields. Please provide gender, weight, and age.');
  });

  test('throws error if gender is invalid', () => {
    //Given
    const person = { gender: 'invalid', weight: 70, age: 30 };
    //Then
    expect(() => {
        //When
      service.calculate(person);
    }).toThrow('Invalid gender. Please enter "male" or "female".');
  });

  test('throws error if weight is missing', () => {
    // Given
    const person = { gender: 'male', age: 30 };
    // Then
    expect(() => {
      // When
      service.calculate(person);
    }).toThrow('Missing required fields. Please provide gender, weight, and age.');
  });

  test('throws error if age is missing', () => {
    // Given
    const person = { gender: 'male', weight: 70 };
    // Then
    expect(() => {
      // When
      service.calculate(person);
    }).toThrow('Missing required fields. Please provide gender, weight, and age.');
  });

  test('throws error if weight is invalid', () => {
    // Given
    const person = { gender: 'male', weight: -10, age: 30 };
    // Then
    expect(() => {
      // When
      service.calculate(person);
    }).toThrow('Invalid data. Please provide valid gender, weight (0 < weight <= 1000), and age (0 < age <= 130).');
  });

  test('throws error if age is invalid', () => {
    // Given
    const person = { gender: 'male', weight: 70, age: -10 };
    // Then
    expect(() => {
      // When
      service.calculate(person);
    }).toThrow('Invalid data. Please provide valid gender, weight (0 < weight <= 1000), and age (0 < age <= 130).');
  });

  test('throws error if weight exceeds the maximum limit', () => {
    // Given
    const person = { gender: 'male', weight: 1100, age: 30 };
    // Then
    expect(() => {
      // When
      service.calculate(person);
    }).toThrow('Invalid data. Please provide valid gender, weight (0 < weight <= 1000), and age (0 < age <= 130).');
  });

  test('throws error if age exceeds the maximum limit', () => {
    // Given
    const person = { gender: 'male', weight: 70, age: 150 };
    // Then
    expect(() => {
      // When
      service.calculate(person);
    }).toThrow('Invalid data. Please provide valid gender, weight (0 < weight <= 1000), and age (0 < age <= 130).');
  });

});

