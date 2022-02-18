import "./App.css";
import { useState } from "react";
import { TimerContext } from "./Components/TimerContext";
import TimerList from "./Components/TimerList";

function App() {
  const [timerContext, setTimerContext] = useState(require("./data.json"));
  return (
    <div className="App">
      <TimerContext.Provider value={{ timerContext, setTimerContext }}>
        <TimerList />
      </TimerContext.Provider>
    </div>
  );
}

export default App;
