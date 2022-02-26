import "./App.css";
import TimerList from "./components/TimerList";
import { TimerProvider } from "./components/TimerProvider";

function App() {
  return (
    <TimerProvider>
      <div className="App">
        <h1>Timers</h1>
        <hr style={{ width: "80%" }} />
        <TimerList />
      </div>
    </TimerProvider>
  );
}

export default App;
