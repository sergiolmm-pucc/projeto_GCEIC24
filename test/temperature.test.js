const {convertFromCelsius, convertFromFahrenheit, convertFromKelvin} = require('../routes/temperature.js')

describe('Temperature testes', () =>{
  test('Convert from celsius', () =>{
    const temp = convertFromCelsius(30)
    expect(temp.celsius).toBe(30);
    expect(temp.fahrenheit).toBe(86);
    expect(temp.kelvin).toBe(303);

  })
  test('Convert from fahrenheit', () =>{
    const temp = convertFromFahrenheit(86)
    expect(temp.celsius).toBe(30);
    expect(temp.fahrenheit).toBe(86);
    expect(temp.kelvin).toBe(303);

  })
  test('Convert from kelvin', () =>{
    const temp = convertFromKelvin(303)
    expect(temp.celsius).toBe(30);
    expect(temp.fahrenheit).toBe(86);
    expect(temp.kelvin).toBe(303);

  })

  test('throws error if celsius is undefined', () =>{
    
    expect(()=>{
      convertFromCelsius(undefined)
    }).toThrow('Todos os parâmetros devem ser fornecidos.')
  
  })
  test('throws error if fahrenheit is undefined', () =>{
    
    expect(()=>{
      convertFromFahrenheit(undefined)
    }).toThrow('Todos os parâmetros devem ser fornecidos.')
  
  })
  test('throws error if kelvin is undefined', () =>{
    
    expect(()=>{
      convertFromKelvin(undefined)
    }).toThrow('Todos os parâmetros devem ser fornecidos.')
  
  })

  test("throws error if celsius is NaN", () =>{
    
    expect(()=>{
      convertFromCelsius('a')
    }).toThrow('Parâmetros invalidos')
  
  })
  test("throws error if Fahrenheit is NaN", () =>{
    
    expect(()=>{
      convertFromFahrenheit('a')
    }).toThrow('Parâmetros invalidos')
  
  })
  test('throws error if kelvin is NaN"', () =>{
    
    expect(()=>{
      convertFromKelvin('a')
    }).toThrow('Parâmetros invalidos')
  
  })

})