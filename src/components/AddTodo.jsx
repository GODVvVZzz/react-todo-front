// src/components/AddTodo.jsx
import { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim() || submitting) return
    
    try {
      setSubmitting(true)
      await onAdd(text)
      setText('')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="输入新的待办事项..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitting}
      />
      <button 
        type="submit" 
        className={`add-button ${submitting ? 'disabled' : ''}`}
        disabled={submitting}
      >
        <FiPlusCircle size={24} />
      </button>
    </form>
  )
}

export default AddTodo