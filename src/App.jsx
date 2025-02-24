// src/App.jsx
import { useState, useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  // 日期格式化工具
  const formatDate = (date) => format(date, 'yyyy-MM-dd')

  // 获取待办事项
  const fetchTodos = async (date) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/todos?date=${formatDate(date)}`)
      const data = await res.json()
      setTodos(data.data)
    } catch (error) {
      console.error('获取数据失败:', error)
    } finally {
      setLoading(false)
    }
  }

  // 日期变化时重新获取数据
  useEffect(() => {
    fetchTodos(selectedDate)
  }, [selectedDate])

  // 添加待办事项
  const handleAdd = async (text) => {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          date: formatDate(selectedDate)
        })
      })
      if (res.ok) fetchTodos(selectedDate)
    } catch (error) {
      console.error('添加失败:', error)
    }
  }

  // 删除事项
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/todos/${id}`, { method: 'DELETE' })
      if (res.ok) fetchTodos(selectedDate)
    } catch (error) {
      console.error('删除失败:', error)
    }
  }

  // 切换完成状态
  const handleToggle = async (id, completed) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed })
      })
      if (res.ok) fetchTodos(selectedDate)
    } catch (error) {
      console.error('更新失败:', error)
    }
  }

  return (
    <div className="app-container">
      <h1>每日待办清单</h1>
      <div className="date-picker-wrapper">
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="date-picker"
        />
      </div>
      
      <AddTodo onAdd={handleAdd} />
      
      {loading ? (
        <div className="loading">加载中...</div>
      ) : (
        <TodoList 
          todos={todos} 
          onDelete={handleDelete} 
          onToggle={handleToggle} 
        />
      )}
    </div>
  )
}

export default App