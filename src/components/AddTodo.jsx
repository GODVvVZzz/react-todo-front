import { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

/**
 * 
父组件 (App.jsx)
  ↓ 传递 onAdd 方法
AddTodo 组件
  ↑ 提交时调用 onAdd(输入内容)
 * 
 * 用户输入 → 触发 onChange → 更新 text 状态 → 输入框显示最新内容
   ↓
   点击提交 → 触发 onSubmit → 验证并调用 onAdd → 清空输入框


组件定义：
const AddTodo = (...) => { ... }
使用箭头函数定义 React 组件

参数接收：
({ onAdd })
等价于接收 props 对象

使用对象解构语法直接提取 props.onAdd
 */
const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()       // 阻止表单默认提交行为
    if (text.trim()) {       // 检查非空输入
      onAdd(text)            // 调用父组件传递的添加方法
      setText('')            // 清空输入框
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="输入新的待办事项..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit" className='add-button'>
        <FiPlusCircle size={24} />
      </button>
    </form>
  )
}

export default AddTodo