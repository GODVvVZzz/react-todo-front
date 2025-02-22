import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default TodoList