import React from "react";
import taskList from "../../static/tasks";

export default function Tasks() {
  return (
    <div>
      <div className="container">
        <div className="weekly box">
          <h3>Weekly Tasks</h3>
          {taskList.map(({ id, item }) => (
            <p className="single_task" key={id}>
              {item}
            </p>
          ))}
        </div>
        <div className="daily box">
          <h3>Daily Target</h3>
        </div>
      </div>
    </div>
  );
}
