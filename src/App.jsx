import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './pages/Main'
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'
import { useState } from 'react'
import TodoList from './pages/TodoList'


const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

function App() {
  
  const [todoItems, setTodoItems] = useState(initialState)

  function handleAddTodo(todo) {
    setTodoItems([
      todo,
      ...todoItems
    ])
  }

  function handleDeleteTodo(id) {
    setTodoItems(todoItems => todoItems.filter(todo => todo.id !== id))
  }

  function handleEditTodo(updatedTodo){
    setTodoItems(todoItems.map(todo => todo.id === updatedTodo.id ? updatedTodo:todo))
  }

  function handleToggleTodo(id) {
    setTodoItems((todoItems) => todoItems.map((todo) => todo.id === id? {
      ...todo,
      completed: !todo.completed
    }: todo))
  }

  return (
    <>
      {/* <Nav/> */}
      {/* <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/add' element={<AddTodo/>} />
        <Route path='/edit/:id' element={<EditTodo/>} />
      </Routes> */}
      <Main onAddTodo={handleAddTodo}/>
      <TodoList todos={todoItems} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} onToggleTodo={handleToggleTodo}/>
      
    </>
  )
}

export default App
