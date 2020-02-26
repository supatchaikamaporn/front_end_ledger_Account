import axios from "axios";
import ListData from "../data/ListData";

class ListModel {
  constructor(
    list = ListData,
    lists = [],
    url = "http://localhost:3000/lists/",
    config = {
      headers: {
        "accept-version": "1",
        "Content-Type": "application/json"
      }
    }
  ) {
    this.list = list;
    this.lists = lists;
    this.url = url;
    this.config = config;
  }
  async getAll() {
    return axios.get(this.url, this.config).then(response => {
      this.lists = response.data.data;
      return response.data;
    });
  }
  async getAt(id) {
    return axios.get(this.url + id, this.config).then(response => {
      this.list = response.data.data[0];
      return response.data;
    });
  }
  async add() {
    return axios
      .post(
        this.url,
        {
          type: this.list.lal_type,
          money: this.list.lal_money,
          descript: this.list.lal_descript,
          id: this.list.lal_lab_id
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
        this.url,
        {
          type: this.list.lal_type,
          money: this.list.lal_money,
          descript: this.list.lal_descript,
          id: this.list.lal_lab_id
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

export default new ListModel();
