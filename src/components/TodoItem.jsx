import {FiCheck, FiTrash2} from 'react-icons/fi'

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    // 动态类名
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
        {/* 条件渲染图标：仅当完成时显示勾选图标 */}
        {todo.completed && <FiCheck className='check-icon' />}
        <span className='todo-text'>{todo.text}</span>
      </div>
     
      <FiTrash2 
      className='delete-icon' 
      onClick={() => onDelete(todo.id)}
      />
    </li>
  )
}

export default TodoItem