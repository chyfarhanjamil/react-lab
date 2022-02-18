import "./App.css";
import Booklist from "./Components/Booklist";
import { BookProvider } from "./Components/BookProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";

function App() {
  return (
    <BookProvider>
      <div className="App">
        {/* <<Booklist />
        {/* <Form/> */}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Booklist />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BookProvider>
  );
}

export default App;
