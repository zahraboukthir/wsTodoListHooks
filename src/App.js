import "./App.css";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";
import { useState } from "react";
import { data } from "./data";
import FilterTask from "./Components/FilterTask";

function App() {
  const [list, setList] = useState(data);
  const [oldtask, settOldtask] = useState({});
  const handeladd = (newtodo) => setList([...list, newtodo]);
  const handelComplete = (id, isdonetodo) => {
    setList(
      list.map((todo) =>
        todo.id === id
          ? { ...todo, isdone: isdonetodo ? "notdone" : "done" }
          : todo
      )
    );
  };
  const handelEdit = (id, editedtask) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, name: editedtask } : todo
      )
    );
    settOldtask({});
  };
  const [filterstatus, setFilterstatus] = useState("All");
  const handelfilter = (staus) => {
    setFilterstatus(staus);
  };
  const handelDelet = (id) => { 
    setList(list.filter(el=>
      el.id!==id 
      ))
   }

  const getoldtask = (oldtask) => settOldtask(oldtask);
  return (
    <div className="App">
      <AddTask
        handeladd={handeladd}
        l={list.length}
        handelEdit={handelEdit}
        oldtask={oldtask}
      />
      <FilterTask handelfilter={handelfilter} />
      <TaskList
      handelDelet={handelDelet}
        list={list}
        filterstatus={filterstatus}
        handelComplete={handelComplete}
        getoldtask={getoldtask}
      />
    </div>
  );
}

export default App;
