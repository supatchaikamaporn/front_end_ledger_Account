exports.La_book = class {
  constructor(
    lab_id,
    lab_token,
    lab_amount,
    lab_income,
    lab_expense,
    lab_descript,
    lab_timestamp,
    lab_lap_id
  ) {
    this.lab_id = lab_id;
    this.lab_token = lab_token;
    this.lab_amount = lab_amount;
    this.lab_income = lab_income;
    this.lab_expense = lab_expense;
    this.lab_descript = lab_descript;
    this.lab_timestamp = lab_timestamp;
    this.lab_lap_id = lab_lap_id;
  }
};
