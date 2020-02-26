class MediatorData {
  constructor(
    lam_id = null,
    lam_use = null,
    lam_descript = null,
    lam_timestamp = null,
    lam_lab_id = null,
    lam_lae_id = null
  ) {
    this.lam_id = lam_id;
    this.lam_use = lam_use;
    this.lam_descript = lam_descript;
    this.lam_timestamp = lam_timestamp;
    this.lam_lab_id = lam_lab_id;
    this.lam_lae_id = lam_lae_id;
  }
}

export default new MediatorData();
