import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([    
    {id: 1, text: '学习React', completed: false},
    {id: 2, text: '构建ToDo应用', completed: true},
  ])

  // 添加待办事项
  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  // 删除待办事项
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 切换待办事项状态
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onDelete={deleteTodo} 
        onToggle={toggleComplete} 
      />
    </div>
  )
}

export default App
