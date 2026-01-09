import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)

  const Increment = () => {
    setNum(num+1)
  }

  const Decrement = () => {
    setNum(num-1)
  }

  const Reset = () => {
    setNum(0)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gray-600">
      <h1 className="text-2xl font-bold text-white bg-gray-800 px-6 py-2 rounded">{num}</h1>
      <div className="flex gap-4">
        <button onClick={Increment} className="bg-blue-500 text-white px-10 py-5 rounded">Increment</button>
        <button onClick={Decrement} className="bg-red-500 text-white px-10 py-5 rounded">Decrement</button>
      </div>
      <button onClick={Reset} className="bg-green-500 text-white px-10 py-5 rounded">Reset</button>
    </div>
  )
}

export default App
