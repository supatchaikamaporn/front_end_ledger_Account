const axios = require("axios").default;
const Person_model = require("./Person_model").default;
class Person_context {
  constructor(person = Person_model) {
    this.person = person;
    this.persons = [];
  }
  get_all_person() {
    const url = "http://localhost:3000/persons";
    return axios.get(url).then(response => {
      this.persons = response.data.data;
    });
  }
}

export default new Person_context();
