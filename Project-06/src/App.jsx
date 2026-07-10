import { useState } from "react"
import Cards from "./components/cards"
import Form from "./components/Form"
import Navbar from "./components/Navbar"


const App = () => {

  const [toggle, setToggle] = useState(false)

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || []
  })

  const [editId, setEditId] = useState(null)

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id)
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }

  const editUser = (id) => {
    setEditId(id)
    setToggle(prev => !prev)
  }

  return (
    <div className="bg-gray-700 h-screen p-3 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {
        toggle ? (
          <div className="flex flex-wrap gap-3">
            {users.map((elem) => (
              <Cards key={elem.id} users={elem} deleteUser={deleteUser} editUser={editUser}/>
            ))}
          </div>
        ) : (
          <div>
              <Form users={users} setUsers={setUsers} setToggle={setToggle} editId={editId} setEditId={setEditId}/>
          </div>
        )
      }
    </div>
  )
}

export default App