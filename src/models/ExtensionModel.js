import axios from "axios";
import ExtensionData from "../data/ExtensionData";

class ExtensionModel {
  constructor(
    extension = ExtensionData,
    extensions = [],
    url = "http://localhost:3000/extensions/",
    config = {
      headers: {
        "accept-version": "1",
        "Content-Type": "application/json"
      }
    }
  ) {
    this.extension = extension;
    this.extensions = extensions;
    this.url = url;
    this.config = config;
  }
  async getAll() {
    return axios.get(this.url, this.config).then(response => {
      this.extensions = response.data.data;
      return response.data;
    });
  }
  async getAt(id) {
    return axios.get(this.url + id, this.config).then(response => {
      this.extension = response.data.data[0];
      return response.data;
    });
  }
  async add() {
    return axios
      .post(
        this.url,
        {
          descript: this.extension.lae_descript
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
          descript: this.extension.lae_descript
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

export default new ExtensionModel();
