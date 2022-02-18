import React, { useState, useEffect, useContext } from "react";
import Timer from "../Components/Timer";
import { TimerContext } from "./TimerContext";

export default function TimerList() {
  const { timerContext, setTimerContext } = useContext(TimerContext);
  const [addButton, setAddButton] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    project: "",
  });
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const changeAddButtonStatus = () => {
    setAddButton(!addButton);
  };
  const createButtonOnClick = () => {
    changeAddButtonStatus();
    setTimerContext([
      ...timerContext,
      { title: formData.title, project: formData.project, secs: 0 },
    ]);
    setFormData({
      title: "",
      project: "",
    });
  };
  const cancelButtonClick = () => {
    changeAddButtonStatus();
  };
  return (
    <div>
      {timerContext.map((timer) => (
        <div>
          <Timer timer={{ ...timer }} />
        </div>
      ))}
      {!addButton && (
        <div>
          <button className="button" onClick={changeAddButtonStatus}>
            add
          </button>
        </div>
      )}
      {addButton && (
        <div>
          <form>
            <label>Title</label>
            <input
              name={"title"}
              value={formData.title}
              onChange={onChangeFormData}
            ></input>
            <label>Project</label>
            <input
              name={"project"}
              value={formData.project}
              onChange={onChangeFormData}
            ></input>
            <button className="button" onClick={createButtonOnClick}>
              Create
            </button>
            <button className="button" onClick={cancelButtonClick}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
