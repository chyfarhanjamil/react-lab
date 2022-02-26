import React, { createContext, useState } from "react";

export const TimerContext = createContext();

export function TimerProvider(props) {
  const [time, setTime] = useState({
    timers: [
      { s: 7, m: 0, h: 1, title: "Mow the lawn", project: "House chores" },
      {
        s: 13,
        m: 21,
        h: 0,
        title: "Clear paper jam",
        project: "Office chores",
      },
      {
        s: 0,
        m: 0,
        h: 14,
        title: "Ponder origins of universe",
        project: "Life chores",
      },
    ],
  });
  return (
    <TimerContext.Provider value={[time, setTime]}>
      {props.children}
    </TimerContext.Provider>
  );
}
