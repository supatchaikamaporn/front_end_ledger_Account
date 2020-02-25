class ListData {
  constructor(
    lal_id = null,
    lal_type = null,
    lal_money = null,
    lal_descript = null,
    lal_timestamp = null,
    lal_lab_id = null
  ) {
    this.lal_id = lal_id;
    this.lal_type = lal_type;
    this.lal_money = lal_money;
    this.lal_descript = lal_descript;
    this.lal_timestamp = lal_timestamp;
    this.lal_lab_id = lal_lab_id;
  }
}

export default new ListData();
