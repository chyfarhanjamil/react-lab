import React, { useState, useContext, useRef } from "react";
import Timer from "./Timer";
import { TimerContext } from "./TimerProvider";

export default function TimerList() {
  // const [time, setTime] = useState({
  //   timers: [
  //     { s: 0, m: 0, h: 0, title: "Mow the lawn", project: "House chores" },
  //     { s: 0, m: 0, h: 0, title: "Bow the lawn", project: "Bouse chores" },
  //   ],
  // });

  const [time, setTime] = useContext(TimerContext);

  const [interv, setInterv] = useState(0);
  const [addStatus, setAddStatus] = useState(false);

  const titleRef = useRef("");
  const projectRef = useRef("");

  const start = (index) => {
    run(index);

    setInterv(
      setInterval(() => {
        run(index);
      }, 1000)
    );
  };

  const run = (index) => {
    //setStatus(1);
    var updatedS = time.timers[index].s,
      updatedM = time.timers[index].m,
      updatedH = time.timers[index].h;

    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    let newTimers = [...time.timers];
    //let index = newTimers.indexOf(obj);

    newTimers[index].s = updatedS;
    newTimers[index].m = updatedM;
    newTimers[index].h = updatedH;

    return setTime({ timers: newTimers });
  };

  const stop = () => {
    clearInterval(interv);
    //setStatus(0);
  };

  const handleAdd = () => {
    setAddStatus(!addStatus);
    console.log(addStatus);
  };

  return (
    <div>
      {time.timers.map((timer, index) => (
        <Timer
          key={index}
          timer={timer}
          start={() => start(index)}
          stop={stop}
        />
      ))}
      <br />
      {addStatus === false ? (
        <button onClick={handleAdd}>+</button>
      ) : (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            let title_ = titleRef.current.value;
            let project_ = projectRef.current.value;

            setTime({
              timers: [
                ...time.timers,
                { s: 0, m: 0, h: 0, title: title_, project: project_ },
              ],
            });
            setAddStatus(!addStatus);
          }}
        >
          <label style={{ float: "left", fontWeight: "bold" }}>
            Title
            <input
              type="text"
              ref={titleRef}
              required
              style={{ float: "right", margin: "0px 10px 10px 10px" }}
            ></input>
          </label>
          <br />
          <label style={{ float: "left", fontWeight: "bold" }}>
            Project
            <input
              type="text"
              ref={projectRef}
              required
              style={{ float: "right", margin: "0px 10px 10px 10px" }}
            ></input>
            <br />
          </label>
          <br />
          <br />
          <button
            type="submit"
            style={{ padding: "10px", color: "blue", width: "100px" }}
          >
            Register
          </button>
          <button
            onClick={() => setAddStatus(!addStatus)}
            style={{ padding: "10px", color: "red", width: "100px" }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
