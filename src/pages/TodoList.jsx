import React from 'react'
import Todo from './Todo'

function TodoList({todos, onDeleteTodo, onEditTodo, onToggleTodo}) {
  console.log(todos)
  return (
    <div>
        <ul>
            {todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} onToggleTodo={onToggleTodo}/>
            })

            }
        </ul>
    </div>
  )
}

export default TodoList