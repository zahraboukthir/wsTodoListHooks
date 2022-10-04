import React from "react";
import Task from "./Task";

const TaskList = ({ list, handelComplete, getoldtask, filterstatus ,handelDelet}) => {
  return (
    <div>
      <h1>TaskList</h1>
      <div>
        {filterstatus === "done"
          ? list
              .filter((todo) => todo.isdone === "done")
              .map((todo) => (
                <Task handelDelet={handelDelet}
                  getoldtask={getoldtask}
                  key={todo.id}
                  todo={todo}
                  handelComplete={handelComplete}
                  checked={todo.isdone === "done" ? true : false}
                />
              ))
          : filterstatus === "notdone"
          ? list
              .filter((todo) => todo.isdone === "notdone")
              .map((todo) => (
                <Task handelDelet={handelDelet}
                  getoldtask={getoldtask}
                  key={todo.id}
                  todo={todo}
                  handelComplete={handelComplete}
                  checked={todo.isdone === "done" ? true : false}
                />
              ))
          : list.map((todo) => (
              <Task handelDelet={handelDelet}
                getoldtask={getoldtask}
                key={todo.id}
                todo={todo}
                handelComplete={handelComplete}
                checked={todo.isdone === "done" ? true : false}
              />
            ))}
      </div>
    </div>
  );
};

export default TaskList;
