import { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText('')
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