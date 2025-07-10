import { useState } from 'react'
import './App.css'
import UserInput from './components/UserInput'
import WorksList from './components/WorksList'

function App() {
  const [todo, setTodo] = useState("");
  const [works, setWorks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  const handleAddBtn = () => {
    if(todo.trim() === ""){
      alert("Please write your todo first.")
    }else{
      const newTodo = {
        id: Date.now(),
        text: todo,
        completed: false
      }
      console.log(newTodo);
      setWorks([newTodo, ...works])
      setTodo("")
    }
  }

  const handleToggleCompleted = (id) => {
    const updatedTodo = works.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    setWorks(updatedTodo)
  }

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditTodo(todo.text)
  }

  const handleUpdate = () => {
    const updatedTodo = works.map((todo) => 
      todo.id === editId ? {...todo, text: editTodo} : todo
    )
    setWorks(updatedTodo)
    setEditId(null)
    setEditTodo("")
  }

  const handleDeleteTodo = (id) => {
    const updateWorkList = works.filter(todo => todo.id !== id);
    setWorks(updateWorkList);
  }

  return (
    <>
      <div className="container w-[420px] my-0 mx-auto bg-gray-500 p-6 rounded-2xl shadow-md shadow-gray-500">
        <h1 className='text-3xl text-black font-bold py-3'>Todo App</h1>
        <UserInput todo={todo} setTodo={setTodo} handleAddBtn={handleAddBtn} /> 
        <WorksList 
          works={works} 
          handleToggleCompleted={handleToggleCompleted} 
          editId={editId} 
          handleEdit={handleEdit} 
          editTodo={editTodo} 
          setEditTodo={setEditTodo} 
          handleUpdate={handleUpdate} 
          handleDelete={handleDeleteTodo}
        />
      </div>
    </>
  )
}

export default App
