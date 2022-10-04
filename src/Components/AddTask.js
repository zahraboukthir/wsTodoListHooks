import React, { useEffect, useState } from "react";
import './todo.css'
const AddTask = ({ handeladd, l,handelEdit, oldtask}) => {
    console.log(oldtask)
  const [name, setName] = useState("");
  const addEdittask = () => {
   oldtask.name ? handelEdit(oldtask.id,name) :
    name.trim()
      ? handeladd({ id: l, name: name.trim(), isdone: "notdone" })
      : alert("give the todo name");
    setName("");
  };
  useEffect(() => {
  function gg() {
     return oldtask.name ?setName(oldtask.name):null
  }
  gg()
  }, [oldtask])

  
  return (
    <div >
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      
      />
      <button onClick={addEdittask}>{oldtask.name ? "Edit" :"Add"} </button>
    </div>
  );
};

export default AddTask;
