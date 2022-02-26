import React, { useContext, useState, useRef } from "react";
import "../timer.css";
import { TimerContext } from "./TimerProvider";

export default function Timer(props) {
  const { timer } = props;
  const [time, setTime] = useContext(TimerContext);
  const [editStatus, setEditStatus] = useState(false);

  const [btnStatus, setBtnStatus] = useState(false);

  const titleRef = useRef("");
  const projectRef = useRef("");

  const arr = [...time.timers];
  let index = arr.indexOf(timer);
  //console.log(btnStatus);

  //On button
  let onTimerOn = () => {
    setBtnStatus(!btnStatus);
    props.start();
  };
  let onTimerOff = () => {
    setBtnStatus(!btnStatus);
    props.stop();
  };

  let handleDelete = () => {
    arr.splice(index, 1);
    setTime({ timers: arr });
  };

  // EDIT Button
  let edit = () => {
    setEditStatus(!editStatus);
    onTimerOff();
  };

  if (editStatus) {
    return (
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          let title_ = titleRef.current.value;
          let project_ = projectRef.current.value;
          arr[index].title = title_;
          arr[index].project = project_;

          setTime({ timers: arr });
          setEditStatus(!editStatus);
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
            style={{ float: "right", width: "70%", margin: "auto" }}
          ></input>
          <br />
        </label>
        <br />
        <br />
        <button
          type="submit"
          style={{ padding: "10px", color: "blue", width: "100px" }}
        >
          Update
        </button>
        <button
          onClick={() => setEditStatus(!editStatus)}
          style={{ padding: "10px", color: "red", width: "100px" }}
        >
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div className="timer" style={{ marginTop: "10px" }}>
      <h2>{timer.title}</h2>
      <h3>{timer.project}</h3>
      <h2 style={{ color: "gray" }}>
        <span>{timer.h < 10 ? "0" + timer.h : timer.h}</span>
        &nbsp;:&nbsp;
        <span>{timer.m < 10 ? "0" + timer.m : timer.m}</span>
        &nbsp;:&nbsp;
        <span>{timer.s < 10 ? "0" + timer.s : timer.s}</span>
      </h2>
      <button onClick={edit} style={{ float: "right", fontSize: "1.2rem" }}>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <button
        onClick={handleDelete}
        style={{ float: "right", fontSize: "1.2rem" }}
      >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
      <br />
      <br />
      {btnStatus === false ? (
        <button
          onClick={onTimerOn}
          style={{ fontSize: "1.3rem", width: "50%", padding: "5px" }}
        >
          Start
        </button>
      ) : (
        <div>
          {" "}
          <button
            onClick={onTimerOff}
            style={{ fontSize: "1.3rem", width: "50%", padding: "5px" }}
          >
            Stop
          </button>{" "}
        </div>
      )}
    </div>
  );
}
