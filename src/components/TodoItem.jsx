import {FiCheck, FiTrash2} from 'react-icons/fi'

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
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