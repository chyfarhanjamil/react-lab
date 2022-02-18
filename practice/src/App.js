import "./App.css";
import Booklist from "./Components/Booklist";
import { BookProvider } from "./Components/BookProvider";
import Form from "./Components/Form";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Booklist />
        {/* <Form/> */}
      </div>
    </BookProvider>
  );
}

export default App;
