class CaloricExpenditureService {

  validatePerson(person) {
    if (!person.gender || !person.weight || !person.age) {
      throw new Error(
        "Missing required fields. Please provide gender, weight, and age."
      );
    }
    if (
      person.weight <= 0 || person.weight > 1000 || person.age <= 0 || person.age > 130
    ) {
      throw new Error("Invalid data. Please provide valid gender, weight (0 < weight <= 1000), and age (0 < age <= 130).");
    }
    if (person.gender !== "male" && person.gender !== "female") {
      throw new Error('Invalid gender. Please enter "male" or "female".');
    }
  }
  

  calculate(person) {
    this.validatePerson(person);

    let caloricExpenditure = 0;

    if (person.gender === "male") {
      caloricExpenditure = 10 * person.weight + 6.25 * 170 - 5 * person.age + 5;
    } else if (person.gender === "female") {
      caloricExpenditure =
        10 * person.weight + 6.25 * 170 - 5 * person.age - 161;
    }

    return caloricExpenditure;
  }
}

module.exports = CaloricExpenditureService;
