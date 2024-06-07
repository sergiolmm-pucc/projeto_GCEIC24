const CaloricExpenditureController = require("../controllers/CaloricExpenditureController");

const mockRequest = (data) => ({ body: data }); 
const mockResponse = () => {
  const res = {}; 
  res.status = jest.fn().mockReturnValue(res); 
  res.json = jest.fn().mockReturnValue(res); 
  return res; 
};

describe('CaloricExpenditureController', () => {
  
  test('returns 200 and calculated caloric expenditure for valid input', async () => {
    const req = mockRequest({ gender: 'male', weight: 70, age: 30 }); 
    const res = mockResponse();

    await CaloricExpenditureController.calculate(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 'success',
      message: 'Caloric Expenditure calculated successfully.',
      payload: expect.any(Array),
    });
    expect(res.json.mock.calls[0][0].payload[0]).toEqual(expect.any(Number));
  });

  test('returns 500 for internal server error', async () => {
    const req = mockRequest({}); 
    const res = mockResponse(); 

    await CaloricExpenditureController.calculate(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      message: 'Missing required fields. Please provide gender, weight, and age.',
      payload: [],
    });
  });
});