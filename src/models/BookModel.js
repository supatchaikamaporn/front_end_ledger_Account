import axios from "axios";
import BookData from "../data/BookData";

class BookModel {
  constructor(
    book = BookData,
    books = [],
    url = "http://localhost:3000/books/",
    config = {
      headers: {
        "accept-version": "1",
        "Content-Type": "application/json"
      }
    }
  ) {
    this.book = book;
    this.books = books;
    this.url = url;
    this.config = config;
  }
  async getAll() {
    return axios.get(this.url, this.config).then(response => {
      this.books = response.data.data;
      return response.data;
    });
  }
  async getAt(id) {
    return axios.get(this.url + id, this.config).then(response => {
      this.book = response.data.data[0];
      return response.data;
    });
  }
  async add() {
    return axios
      .post(
        this.url,
        {
          token: this.book.lab_token,
          amount: this.book.lab_amount,
          income: this.book.lab_income,
          expense: this.book.lab_expense,
          descript: this.book.lab_descript,
          id: this.book.lab_lap_id
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
          token: this.book.lab_token,
          amount: this.book.lab_amount,
          income: this.book.lab_income,
          expense: this.book.lab_expense,
          descript: this.book.lab_descript,
          id: this.book.lab_lap_id
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

export default new BookModel();
