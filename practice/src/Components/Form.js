import React, { useState,useContext } from "react";
import { BookContext } from "./BookProvider";

export default function Form(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useContext(BookContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //props.onAdd(name, author);
        setData({ books: [...data.books, { Name: name, author: author }] });
        setName("");
        setAuthor("");
      }}
    >
      <label>
        name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
      <br />
      <label>
        Author
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}
