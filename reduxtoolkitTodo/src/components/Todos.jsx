import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="font-bold text-xl mb-4">Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2 p-2 border-b">
            <span>{todo.text}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
