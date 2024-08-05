import React from 'react'
import { useState } from 'react'

function Main({onAddTodo}) {
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      title: description,
      id: Date.now(),
      completed: false
    }

    onAddTodo(newTodo)
    setDescription('')

  }

  function handleChange(e) {
    setDescription(e.target.value)
  }

  return (
    <div>
      <h3>Create Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='todo...' value={description} onChange={handleChange}/>
        <button disabled={!description}>Add</button>
      </form>
    </div>
  )
}

export default Main