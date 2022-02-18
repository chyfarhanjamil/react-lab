import React, { useState } from "react";
import Book from "./Book";
import Form from "./Form";

export default function Booklist() {
  const [data, setData] = useState({
    books: [
      { Name: "ABC", author: "hakim" },
      { Name: "DEF", author: "kakim" },
      { Name: "GHI", author: "makim" },
    ],
  });

  let handleDelete = (index) => {
    //console.log(index);
    const newBooks = [...data.books];
    newBooks.splice(index, 1);
    //data.books=newBooks;
    setData({ books: newBooks });
    console.log(data.books);
  };

  let addBook = (name, author) => {
    setData({ books: [...data.books, { Name: name, author: author }] });
  };

  return (
    <div>
      {data.books.map((book, index) => (
        <Book
          key={index}
          name={book.Name}
          author={book.author}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <Form onAdd={addBook} />
    </div>
  );
}
