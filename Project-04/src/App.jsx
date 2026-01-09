import { useState } from 'react'
import Form from './components/form'
import Card from './components/Card'

const App = () => {

  const [task, setTask] = useState([])

  return (
    <div className='min-h-screen md:h-screen md:flex bg-black text-white overflow-hidden'>
      <Form setTask={setTask} />
      <Card task={task} setTask={setTask} />
    </div>
  )
}

export default App