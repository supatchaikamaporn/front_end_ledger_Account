class BookData {
  constructor(
    lab_id = null,
    lab_token = null,
    lab_amount = null,
    lab_income = null,
    lab_expense = null,
    lab_descript = null,
    lab_timestamp = null,
    lab_lap_id = null
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
}

export default new BookData();
