import React from 'react'
import { useState } from 'react'

function Todo({todo,onDeleteTodo, onEditTodo, onToggleTodo}) {

  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(todo.title)

  function handleToggleTodo() {
    onToggleTodo(todo.id)
  }

  function handleDelete(){
    if(todo.completed) {
      onDeleteTodo(todo.id)
    }
    
  }

  function handleEdit(){
    // onEditTodo(todo.id)
    setIsEditing(true)
  }

  function handleSave() {
    onEditTodo({...todo, title: newTitle})
    setIsEditing(false)
  }

  function handleChange(e) {
    setNewTitle(e.target.value)
  }

  return (
    <li>
        <input type="checkbox"  checked={todo.completed} onChange={handleToggleTodo}/>
        {isEditing ? (
          <>
            <input type="text" value={newTitle} onChange={handleChange}/>
            <button onClick={handleSave}>Save</button>
          </>

        ):(
          <>
            <span>{todo.title}</span>
            <button onClick={handleEdit}>Edit</button>
          </>

        )}
        
        <button onClick={handleDelete} disabled={!todo.completed}>Delete</button>
    </li>
  )
}

export default Todo