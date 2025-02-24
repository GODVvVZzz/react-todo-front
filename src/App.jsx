import { useState } from 'react' // react的状态钩子
import { v4 as uuidv4 } from 'uuid' // 生成唯一id的库
import './App.css' // 组件样式
import AddTodo from './components/AddTodo' // 添加待办组件
import TodoList from './components/TodoList' // 待办列表组件

function App() {
  /**
   * 
    todos：存储所有待办事项的数组（应用的"记忆盒子"）

    setTodos：更新状态的唯一方式（就像修改记忆的魔法笔）

    初始数据：两个示例待办事项（方便开发调试）
   */
  const [todos, setTodos] = useState([    
    {id: 1, text: '学习React', completed: false},
    {id: 2, text: '构建ToDo应用', completed: true},
  ])

  // 添加待办事项
  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(), //生成唯一id
      text, // 事项内容(ES6简写  什么是es6？)
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

  /**
   * 
  组件树结构：
App
├── AddTodo（输入框+添加按钮）
└── TodoList（列表容器）
    └── TodoItem（单个待办事项） × N

用户操作 → 子组件触发事件 → 调用父组件函数 → 更新状态 → 重新渲染

Props传递：
onAdd：接收子组件提交的新事项文本
todos：传递数据给列表组件
onDelete 和 onToggle：传递操作函数给子组件
   */
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
