import React, { Component } from "react";
import Data from "../data.json";
import Book from "./Book";

export default class BookList extends Component {
  state = { books: Data };
  priceIncrement = (obj) => {
    const booksNew = [...this.state.books];
    let index = booksNew.indexOf(obj);
    booksNew[index].likes++;

    const sorted = booksNew.sort((a, b) => b.likes - a.likes);

    this.setState({
      books: sorted,
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Popular Products</h1>
        <hr style={{ width: "80%" }} />
        {this.state.books.map((book, index) => (
          <Book key={index} book={book} onIncrement={this.priceIncrement} />
        ))}
      </React.Fragment>
    );
  }
}
