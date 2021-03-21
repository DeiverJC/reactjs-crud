import { isEmpty } from 'lodash'
import React, { useState } from 'react'

function App() {
  const [task, setTask] = useState("")
  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)) {
      console.log('task is empty')
      return
    }
    console.log('ok', task)
    setTask("")
  }
  return (
    <div className="container mt-5">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks list</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Task name</span>
              <button className="btn btn-danger btn-sm float-right">Delete</button>
              <button className="btn btn-warning btn-sm float-right mr-2">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Create task</h4>
          <form onSubmit={addTask}>
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="Type task..."
              onChange={(text) => {setTask(text.target.value)}}
              value={task}
            />
            <button className="btn btn-dark btn-block">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
