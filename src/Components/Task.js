import React, { useState } from 'react'

import './todo.css'
const Task = ({todo,handelComplete,checked,getoldtask,handelDelet}) => {
    const [checkeds, setCheckeds] = useState(checked)
    const handelchange = () => { 
        setCheckeds(!checkeds)
        handelComplete(todo.id,checkeds)
     }

  return (
    <div style={{
        display:"flex", justifyContent :"space-around", width:"400px",
        margin:"0 auto"
    }}>
        <input type="checkbox" checked={checkeds} onChange={handelchange}/>
        <h1 className={todo.isdone==="done" ? "done":"notdone"}>{todo.name}</h1>
        <div>
        <button onClick={()=>getoldtask(todo)}>Edit</button>
        </div>
        <button onClick={()=>handelDelet(todo.id)}>X</button>
    </div>
  )
}

export default Task