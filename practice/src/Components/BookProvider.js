import React, { createContext,useState } from "react";

export const BookContext = createContext();
export function BookProvider(props) {
  const [data, setData] = useState({
    books: [
      { Name: "ABC", author: "hakim" },
      { Name: "DEF", author: "kakim" },
      { Name: "GHI", author: "makim" },
    ],
  });
  return (
    <BookContext.Provider value={[data, setData]}>{props.children}</BookContext.Provider>
  );
}
