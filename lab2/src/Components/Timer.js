import React, { useContext, useState } from "react";

import { TimerContext } from "./TimerContext";
import "../stylesheet/timer.css";

export default function Timer({ timer }) {
  const { timerContext, setTimerContext } = useContext(TimerContext);
  const [secs, setSecs] = useState(timer.secs);
  const [intervalId, setInterValId] = useState(null);
  const [editButton, setEditButton] = useState(false);
  const [startButton, setStartButton] = useState(false);
  const [timerData, setTimerData] = useState({
    title: timer.title,
    project: timer.project,
    secs: timer.secs,
  });

  const { title, project } = timerData;
  const calculateTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };
  const onChangeFormData = (e) => {
    setTimerData({ ...timerData, [e.target.name]: e.target.value });
  };
  const onClickEditButton = () => {
    setStartButton(false);
    setEditButton(true);
  };
  const onClickDoneButton = () => {
    setEditButton(false);
  };
  const onClickDeleteButton = () => {
    setTimerContext(timerContext.filter((t) => t.title !== timer.title));
  };
  const onClickStartButton = () => {
    setStartButton(true);
    let intervalId = setInterval(() => {
      setSecs((prev) => prev + 1);
    }, 1000);
    setInterValId(intervalId);
  };
  const onClickStopButton = () => {
    setStartButton(false);
    clearInterval(intervalId);
    setInterValId(null);
  };

  return (
    <div className="timer">
      <div className="container">
        <div className="timer_container">
          {!editButton && (
            <div>
              <h2>{title}</h2>
              <p>{project}</p>
              <h3>
                {calculateTime(secs).h < 10
                  ? "0" + calculateTime(secs).h
                  : calculateTime(secs).h}{" "}
                :{" "}
                {calculateTime(secs).m < 10
                  ? "0" + calculateTime(secs).m
                  : calculateTime(secs).m}{" "}
                :{" "}
                {calculateTime(secs).s < 10
                  ? "0" + calculateTime(secs).s
                  : calculateTime(secs).s}
              </h3>
              {!startButton && (
                <div>
                  <button className="button" onClick={onClickStartButton}>
                    Start
                  </button>
                  <button className="button" onClick={onClickEditButton}>
                    Edit
                  </button>
                  <button className="button" onClick={onClickDeleteButton}>
                    Delete
                  </button>
                </div>
              )}
              {startButton && (
                <button className="button" onClick={onClickStopButton}>
                  End
                </button>
              )}
            </div>
          )}
          {editButton && (
            <div>
              <form>
                <label> Title </label>
                <input
                  name="title"
                  value={timerData.title}
                  onChange={onChangeFormData}
                ></input>
                <label> Project </label>
                <input
                  name="project"
                  value={timerData.project}
                  onChange={onChangeFormData}
                ></input>
                <button className="button" onClick={onClickDoneButton}>
                  done
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
