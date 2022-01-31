import React from "react";
import "../card.css";

export default function Book(props) {
  const { book } = props;
  //console.log(book.likes);
  return (
    <div className="card">
      <img src={book.image} style={{ float: "left" }} alt="Title" />
      <button onClick={() => props.onIncrement(book)}>{book.likes}</button>
      <h2 style={{ color: "skyblue" }}>{book.bookName}</h2>
      <h3>{book.writer}</h3>
      <span style={{ fontSize: "1.2rem" }}>SubmittedBy: </span>
      <img src={book.price} alt="Desc" />
    </div>
  );
}
