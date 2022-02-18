import React, { useState, useContext, useRef } from "react";
import { BookContext } from "./BookProvider";

export default function Form(props) {
  // const [name, setName] = useState("");
  // const [author, setAuthor] = useState("");
  const [data, setData] = useContext(BookContext);

  const nameRef = useRef("");
  const authorRef = useRef("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let name_ = nameRef.current.value;
        let author_ = authorRef.current.value;
        //props.onAdd(name, author);
        setData({ books: [...data.books, { Name: name_, author: author_ }] });
        // setName("");
        // setAuthor("");
        console.log(nameRef.current.value);
      }}
    >
      <label>
        name
        <input type="text" ref={nameRef}></input>
      </label>
      <br />
      <label>
        Author
        <input type="text" ref={authorRef}></input>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}
