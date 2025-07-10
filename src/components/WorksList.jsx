import React from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDoneOutline } from "react-icons/md";

const WorksList = ({ works, handleToggleCompleted, editId, editTodo, setEditTodo, handleEdit, handleUpdate, handleDelete }) => {
  return (
    <div className='mt-6'>
        {works.length === 0 ? (
          <p className='text-center text-gray-500 italic'>No todo Item</p>
        ) : (
          <ul className='space-y-4'>
            {works.map((todo, index) => (
              <li
                className="flex flex-col sm:flex-row sm:items-center items-center justify-between bg-white p-4 rounded-lg shadow-md transition-all duration-300"
                key={todo.id || index}
              >
                {editId === todo.id ? (
                  <div className='flex w-full gap-3'>
                    <input
                      type="text"
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      className='border w-full p-2 rounded-md text-gray-700 mr-2'
                      placeholder='Edit your todo'
                    />
                    <button onClick={handleUpdate} className='text-black hover:text-white bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md text-xl cursor-pointer transition'><MdOutlineDoneOutline /></button>
                  </div>
                ) : (
                  <>
                    <div className='flex gap-4 items-center'>
                      <input
                        className='w-5 h-5 accent-green-500 cursor-pointer'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleCompleted(todo.id)}
                      />
                      <span className={`text-lg font-medium ${
                        todo.completed ? "line-through text-gray-400 italic" : "text-gray-800"
                      }`}>{todo.text}</span>
                    </div>

                    <div className='flex gap-3 mt-2 sm:mt-0'>
                      <button className='text-xl text-blue-500 hover:text-blue-700 cursor-pointer transition' onClick={() => handleEdit(todo)}><FiEdit /></button>
                      <button className='text-xl text-red-500 hover:text-red-700 cursor-pointer transition' onClick={() => handleDelete(todo.id)}><MdDelete /></button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}

    </div>
  )
}

export default WorksList
