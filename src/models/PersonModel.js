import axios from "axios";
import PersonData from "../data/PersonData";

class PersonModel {
  constructor(
    person = PersonData,
    persons = [],
    url = "http://localhost:3000/persons/",
    config = {
      headers: {
        "accept-version": "1",
        "Content-Type": "application/json"
      }
    }
  ) {
    this.person = person;
    this.persons = persons;
    this.url = url;
    this.config = config;
  }
  async getAll() {
    return axios.get(this.url, this.config).then(response => {
      this.persons = response.data.data;
      return response.data;
    });
  }
  async getAt(id) {
    return axios.get(this.url + id, this.config).then(response => {
      this.person = response.data.data[0];
      return response.data;
    });
  }
  async add() {
    return axios
      .post(
        this.url,
        {
          fname: this.person.lap_fname,
          lname: this.person.lap_lname,
          nname: this.person.lap_nname,
          pfname_id: this.person.lap_pfname_id
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
          fname: this.person.lap_fname,
          lname: this.person.lap_lname,
          nname: this.person.lap_nname,
          pfname_id: this.person.lap_pfname_id
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

export default new PersonModel();
