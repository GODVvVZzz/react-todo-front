// src/components/TodoList.jsx
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete}
          onToggle={() => onToggle(todo.id, todo.completed)}
        />
      ))}
      
      {todos.length === 0 && (
        <div className="empty-state">今天还没有待办事项哦～</div>
      )}
    </ul>
  )
}

export default TodoList