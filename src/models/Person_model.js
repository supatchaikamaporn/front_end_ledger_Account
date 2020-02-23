class Person_model {
  constructor(
    lap_id = null,
    lap_fname = null,
    lap_lname = null,
    lap_nname = null,
    lap_pfname_id = null,
    lap_timestamp = null
  ) {
    this.lap_id = lap_id;
    this.lap_fname = lap_fname;
    this.lap_lname = lap_lname;
    this.lap_nname = lap_nname;
    this.lap_pfname_id = lap_pfname_id;
    this.lap_timestamp = lap_timestamp;
  }
}

export default new Person_model();
