class CaloricExpenditureService {
  calculate(person) {
    let caloricExpenditure = 0;

    if (!person.gender || !person.weight || !person.age) {
      throw new Error(
        "Missing required fields. Please provide gender, weight, and age."
      );
    }

    if (person.gender !== "male" && person.gender !== "female") {
      throw new Error('Invalid gender. Please enter "male" or "female".');
    }

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
