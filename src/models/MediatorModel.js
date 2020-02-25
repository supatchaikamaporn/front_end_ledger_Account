import axios from "axios";
import MediatorData from "../data/MediatorData";

class MediatorModel {
  constructor(
    mediator = MediatorData,
    mediators = [],
    url = "http://localhost:3000/mediators/",
    config = {
      headers: {
        "accept-version": "1",
        "Content-Type": "application/json"
      }
    }
  ) {
    this.mediator = mediator;
    this.mediators = mediators;
    this.url = url;
    this.config = config;
  }
  async getAll() {
    return axios.get(this.url, this.config).then(response => {
      this.mediators = response.data.data;
      return response.data;
    });
  }
  async getAt(id) {
    return axios.get(this.url + id, this.config).then(response => {
      this.mediator = response.data.data[0];
      return response.data;
    });
  }
  async add() {
    return axios
      .post(
        this.url,
        {
          use: this.mediator.lam_use,
          descript: this.mediator.lam_descript,
          book_id: this.mediator.lam_lab_id,
          extension_id: this.mediator.lam_lae_id
        },
        this.config
      )
      .then(response => {
        return response.data;
      });
  }
  async update(id) {
    return axios
      .put(
        this.url + id,
        {
          use: this.mediator.lam_use,
          descript: this.mediator.lam_descript,
          book_id: this.mediator.lam_lab_id,
          extension_id: this.mediator.lam_lae_id
        },
        this.config
      )
      .then(response => {
        return response.data;
      });
  }
  async delete(id) {
    return axios.delete(this.url + id, this.config).then(response => {
      return response.data;
    });
  }
}

export default new MediatorModel();
