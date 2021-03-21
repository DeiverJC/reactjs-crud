import { isEmpty } from 'lodash'
import React, { useState } from 'react'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)) {
      return
    }
    const newTask = {
      id: shortid.generate(),
      task
    }
    setTasks([...tasks, newTask])
    setTask("")
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id ))
  }

  return (
    <div className="container mt-5">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Tasks list</h4>
          {isEmpty(tasks) ? (
            <h5 className="text-center mt-5">No hay tareas para mostrar</h5>
          ) : (
            <ul className="list-group">
            {
              tasks.map(({id, task}) => (
                <li className="list-group-item" key={id}>
                  <span className="lead">{task}</span>
                  <div className="float-right">
                    <button 
                      className="btn btn-warning btn-sm mr-2"
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => { deleteTask(id) }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            }
            </ul>
          )}
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
