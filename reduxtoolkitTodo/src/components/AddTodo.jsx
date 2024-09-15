import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim() === '') return // Prevent empty todos
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex space-x-3 mt-12">
      <input
        type='text'
        className='border p-2 rounded w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400'
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
