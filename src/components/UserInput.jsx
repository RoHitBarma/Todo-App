import React from 'react'

const UserInput = ({ handleAddBtn, todo, setTodo }) => {
  return (
    <div className='w-full flex justify-center items-center mb-4'>
      <div className="flex w-full max-w-xl shadow-md rounded-lg overflow-hidden justify-center">
        <input
          className='w-full bg-blue-300 px-4 py-2 rounded-l-md border-none text-lg outline-none'
          style={{ padding: "0.2rem 1.2rem 0.2rem 0.6rem" }}
          type="text"
          placeholder='Enter Work'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          className='text-lg px-6 font-medium bg-green-600 hover:bg-green-700 cursor-pointer transition-all'
          onClick={handleAddBtn}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default UserInput
