import { useState } from "react"
import Cards from "./components/cards"
import Form from "./components/Form"
import Navbar from "./components/Navbar"


const App = () => {

  const [toggle, setToggle] = useState(false)

  const[users,setUsers]=useState([])

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter(user => user.id !== id))
  }

  return (
    <div className="bg-gray-700 h-screen p-3 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {
        toggle ? (
          <div className="flex flex-wrap gap-3">
            {users.map((elem) => (
              <Cards key={elem.id} users={elem} deleteUser={deleteUser}/>
            ))}
          </div>
        ) : (
          <div>
              <Form setUsers={setUsers} setToggle={setToggle}/>
          </div>
        )
      }
    </div>
  )
}

export default App