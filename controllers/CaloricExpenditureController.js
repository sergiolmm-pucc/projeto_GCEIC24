const CaloricExpenditureService = require('../services/CaloricExpenditureService');

class CaloricExpenditureController {
    async calculate(req, res, next) {
        try {
            const data = req.body;
            const caloricExpenditureService = new CaloricExpenditureService();
            const caloricExpenditure = caloricExpenditureService.calculate(data);

            const response = {
                status: 'success',
                message: 'Caloric Expenditure calculated successfully.',
                payload: [caloricExpenditure],
            };

            return res.status(200).json(response);
        } catch (err) {
            let errorMessage = 'Internal server error.';
            if (err instanceof Error) {
                errorMessage = err.message;
            }

            const errorResponse = {
                status: 'error',
                message: errorMessage,
                payload: [],
            };

            return res.status(500).json(errorResponse);
        }
    }
}

module.exports = new CaloricExpenditureController();
